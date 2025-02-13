'use client';

import Error from 'next/error';

const NotFound = () => {
	return <Error statusCode={404} withDarkMode />;
};

export default NotFound;
