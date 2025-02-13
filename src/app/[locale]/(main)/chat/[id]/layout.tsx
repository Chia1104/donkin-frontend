import { ChatStoreProvider } from '@/contexts/chat-provider';

const Layout = async (
	props: { chat: React.ReactNode; preview: React.ReactNode } & PagePropsWithLocale<{ id: string }>,
) => {
	const chatId = (await props.params).id;
	return (
		<ChatStoreProvider values={{ chatId, preview: 'this is preview' }}>
			<div className="grid grid-cols-3 gap-10 overflow-hidden w-full">
				{props.preview}
				{props.chat}
			</div>
		</ChatStoreProvider>
	);
};

export default Layout;
