import ChatRoomLayout from '@/components/layouts/chat-room-layout';

interface Props {
	children: React.ReactNode;
}

const Layout = (props: Props) => {
	return <ChatRoomLayout>{props.children}</ChatRoomLayout>;
};

export default Layout;
