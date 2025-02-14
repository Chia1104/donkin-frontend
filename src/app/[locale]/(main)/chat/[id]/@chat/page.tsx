'use client';

import { useCallback } from 'react';

import { useChat } from '@ai-sdk/react';
import { Button } from '@heroui/button';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Form } from '@heroui/form';
import { Image } from '@heroui/image';
import { Textarea } from '@heroui/input';
import { ScrollShadow } from '@heroui/scroll-shadow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';

import MessageCard from '@/components/chat/message-card';
import { useChatStore } from '@/contexts/chat-provider';
import { cn } from '@/utils/cn';

const Page = () => {
	const { setIsPreviewOnly, isPreviewOnly, updateMessage } = useChatStore(state => state);
	const t = useTranslations('chat');
	const { messages, input, handleInputChange, handleSubmit, isLoading, error, reload } = useChat({
		onFinish: message => {
			updateMessage(message);
		},
	});

	const _handleSetIsPreviewOnly = useCallback(() => {
		setIsPreviewOnly(!isPreviewOnly);
	}, [isPreviewOnly, setIsPreviewOnly]);

	return (
		<Card className={cn('h-[calc(100vh-72px)] bg-background rounded-none p-5 relative overflow-visible min-w-full')}>
			<Button isIconOnly className="rounded-full absolute top-1/2 -left-5 z-30" variant="faded" color="default">
				<ArrowForwardIosIcon />
			</Button>
			<CardBody className="flex flex-col items-center justify-center">
				<ScrollShadow className="w-full h-[calc(100vh-192px)] flex justify-center items-center">
					{!messages || messages.length === 0 ? (
						<section className="flex flex-col items-center justify-center w-full max-w-[305px] prose prose-invert">
							<Image
								className="mb-2"
								as={NextImage}
								alt="sparkless"
								src="/assets/images/sparkless.png"
								width={96}
								height={96}
							/>
							<h2 className="mt-0 mb-2">{t('donkin-title')}</h2>
							<p className="text-xs text-center">{t('donkin-subtitle')}</p>
						</section>
					) : (
						<section className="flex flex-col gap-5 w-full prose prose-invert justify-start h-full">
							{messages.map((message, index) => {
								const isLast = index === messages.length - 1;
								return (
									<MessageCard
										key={message.id}
										message={message}
										showFeedback={message.role === 'assistant' && isLast}
										isLoading={isLoading}
										status={error && isLast ? 'failed' : 'success'}
										isCurrent={isLast}
										onRetry={reload}
									/>
								);
							})}
						</section>
					)}
				</ScrollShadow>
			</CardBody>
			<CardFooter className="flex flex-col items-center prose prose-invert gap-1 sticky bottom-0">
				<Form className="w-full" onSubmit={handleSubmit}>
					<Textarea
						aria-label="Prompt"
						className="min-h-[60px] w-full"
						classNames={{
							label: 'hidden',
							input: 'py-0 text-medium data-[has-start-content=true]:ps-0 data-[has-start-content=true]:pe-0',
							innerWrapper: 'items-center',
							inputWrapper: 'min-h-[60px]',
						}}
						minRows={1}
						maxRows={8}
						placeholder={t('prompt-placeholder')}
						radius="lg"
						variant="bordered"
						endContent={
							<Button isIconOnly variant="light" type="submit">
								<SendIcon />
							</Button>
						}
						value={input}
						onChange={handleInputChange}
					/>
				</Form>
				<p className="text-xs">{t('donkin-warning')}</p>
			</CardFooter>
		</Card>
	);
};

export default Page;
