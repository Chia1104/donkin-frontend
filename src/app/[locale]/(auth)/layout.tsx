import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { Role } from '@/enums/role.enum';
import { auth } from '@/features/auth/server';

const Layout = async (props: { children: React.ReactNode }) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (session && session.user.role === Role.Admin) {
		redirect('/');
	}

	return props.children;
};

export default Layout;
