'use client';

import NextError from 'next/error';

const Error = () => {
	return <NextError statusCode={500} />;
};

export default Error;
