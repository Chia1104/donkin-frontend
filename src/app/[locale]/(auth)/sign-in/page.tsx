import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import Form from '@/components/auth/form';
import { Role } from '@/enums/role.enum';
import { authClient } from '@/features/auth/client.rsc';

const LoginPage = async () => {
	const session = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	});
	if (session.data && session.data.user.role === Role.Admin) {
		redirect('/');
	}
	return (
		<div className="container mx-auto flex justify-center items-center h-screen">
			<Form />
		</div>
	);
};

export default LoginPage;
