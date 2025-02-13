'use client';

import Error from 'next/error';

import AppLayout from '@/components/layouts/app-layout';

export default function NotFound() {
	return (
		<AppLayout locale="en">
			<Error statusCode={404} />
		</AppLayout>
	);
}
