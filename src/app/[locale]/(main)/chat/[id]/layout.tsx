'use client';

import { useParams } from 'next/navigation';

import { ChatStoreProvider } from '@/contexts/chat-provider';

const Layout = (props: { chat: React.ReactNode; preview: React.ReactNode }) => {
	const { id } = useParams<{ id: string }>();

	return (
		<ChatStoreProvider
			values={{
				chatId: id,
				preview: 'this is preview',
			}}
		>
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 overflow-hidden w-full">
				{props.preview}
				{props.chat}
			</div>
		</ChatStoreProvider>
	);
};

export default Layout;
