import { memo, useCallback } from 'react';

import { CardBody } from '@heroui/card';
import { Image } from '@heroui/image';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';

import ActionCard from '@/components/ui/action-card';

interface Props {
	onAction?: (action: string) => void;
	currentCoin?: string;
}

const DefaultPrompt = ({ currentCoin = 'XX', ...props }: Props) => {
	const t = useTranslations('chat');

	const handleAction = useCallback(
		(action: string) => {
			if (props.onAction) {
				props.onAction(action);
			}
		},
		[props],
	);

	return (
		<section className="flex flex-col items-center justify-center w-full max-w-[350px] prose prose-invert">
			<div className="flex flex-col items-center justify-center w-full max-w-[285px]">
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
			</div>
			<div className="border-1 border-divider flex flex-col gap-2 rounded-lg p-3 w-full not-prose">
				<p className="text-xs">{t('default-prompt.title')}</p>
				<ActionCard onPress={() => handleAction(t('default-prompt.latest-coins'))}>
					<CardBody>{t('default-prompt.latest-coins')}</CardBody>
				</ActionCard>
				<ActionCard onPress={() => handleAction(t('default-prompt.smart-wallet-recommendations'))}>
					<CardBody>{t('default-prompt.smart-wallet-recommendations')}</CardBody>
				</ActionCard>
				<ActionCard onPress={() => handleAction(t('default-prompt.largest-whales'))}>
					<CardBody>{t('default-prompt.largest-whales')}</CardBody>
				</ActionCard>
				<ActionCard onPress={() => handleAction(t('default-prompt.info-about', { item: 'XX' }))}>
					<CardBody>{t('default-prompt.info-about', { item: currentCoin })}</CardBody>
				</ActionCard>
			</div>
		</section>
	);
};

export default memo(DefaultPrompt, (prev, next) => {
	return prev.currentCoin === next.currentCoin;
});
