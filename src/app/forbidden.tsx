'use client';

import Error from 'next/error';

import AppLayout from '@/components/layouts/app-layout';

const Forbidden = () => {
	return (
		<AppLayout locale="en">
			<Error statusCode={403} withDarkMode />
		</AppLayout>
	);
};

export default Forbidden;
