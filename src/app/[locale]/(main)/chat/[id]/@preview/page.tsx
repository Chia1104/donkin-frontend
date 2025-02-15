'use client';

import { useChatStore } from '@/contexts/chat-provider';
import { cn } from '@/utils/cn';

const Page = () => {
	const { preview, isPreviewOnly } = useChatStore(state => state);
	return <section className={cn('p-5', isPreviewOnly ? 'lg:col-span-3' : 'lg:col-span-2')}>{preview}</section>;
};

export default Page;
