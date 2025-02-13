'use client';

import { useCallback } from 'react';

import { Button } from '@heroui/button';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Textarea } from '@heroui/input';
import { ScrollShadow } from '@heroui/scroll-shadow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';

import { useChatStore } from '@/contexts/chat-provider';
import { cn } from '@/utils/cn';

const Page = () => {
	const { setIsPreviewOnly, isPreviewOnly } = useChatStore(state => state);
	const t = useTranslations('chat');

	const _handleSetIsPreviewOnly = useCallback(() => {
		setIsPreviewOnly(!isPreviewOnly);
	}, [isPreviewOnly, setIsPreviewOnly]);

	return (
		<Card className={cn('h-[calc(100vh-72px)] bg-background rounded-none py-5 relative overflow-visible min-w-full')}>
			<Button isIconOnly className="rounded-full absolute top-1/2 -left-5 z-30" variant="faded" color="default">
				<ArrowForwardIosIcon />
			</Button>
			<CardBody className="flex flex-col items-center justify-center">
				<ScrollShadow className="w-full flex flex-col items-center justify-center max-h-[calc(100vh-192px)]">
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
				</ScrollShadow>
			</CardBody>
			<CardFooter className="flex flex-col items-center prose prose-invert gap-1 sticky bottom-0">
				<Textarea
					aria-label="Prompt"
					className="min-h-[60px]"
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
						<Button isIconOnly variant="light">
							<SendIcon />
						</Button>
					}
				/>
				<p className="text-xs">{t('donkin-warning')}</p>
			</CardFooter>
		</Card>
	);
};

export default Page;
