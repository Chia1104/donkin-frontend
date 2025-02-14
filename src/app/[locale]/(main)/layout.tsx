import { headers } from 'next/headers';
import { unauthorized, forbidden } from 'next/navigation';

import ChatRoomLayout from '@/components/layouts/chat-room-layout';
import { Role } from '@/enums/role.enum';
import { authClient } from '@/features/auth/client.rsc';

interface Props {
	children: React.ReactNode;
}

const Layout = async (props: Props) => {
	const session = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	});
	if (!session.data) {
		unauthorized();
	} else if (session.data.user.role !== Role.Admin) {
		forbidden();
	}
	return <ChatRoomLayout>{props.children}</ChatRoomLayout>;
};

export default Layout;
