import { headers } from 'next/headers';
import { unauthorized, forbidden } from 'next/navigation';

import ChatRoomLayout from '@/components/layouts/chat-room-layout';
import { Role } from '@/enums/role.enum';
import { auth } from '@/features/auth/server';

interface Props {
	children: React.ReactNode;
}

const Layout = async (props: Props) => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session) {
		unauthorized();
	} else if (session.user.role !== Role.Admin) {
		forbidden();
	}
	return <ChatRoomLayout>{props.children}</ChatRoomLayout>;
};

export default Layout;
