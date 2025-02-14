import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';

import { Role } from '@/enums/role.enum';
import { auth } from '@/features/auth/server';

export const maxDuration = 60;

export async function POST(req: Request) {
	const session = await auth.api.getSession({
		headers: req.headers,
	});

	if (!session) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	} else if (session.user.role !== Role.Admin) {
		return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
	}

	const { messages } = await req.json();

	const result = streamText({
		model: openai('gpt-4o'),
		messages,
	});

	return result.toDataStreamResponse();
}
