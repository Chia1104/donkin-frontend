import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { Role } from '@/enums/role.enum';
import { authClient } from '@/features/auth/client.rsc';

export const maxDuration = 60;

export async function POST(req: Request) {
	const session = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	});

	if (!session.data) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	} else if (session.data.user.role !== Role.Admin) {
		return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
	}

	const { messages } = await req.json();

	const result = streamText({
		model: openai('gpt-4o'),
		messages,
	});

	return result.toDataStreamResponse();
}
