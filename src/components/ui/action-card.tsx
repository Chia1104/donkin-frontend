import type { CardProps } from '@heroui/card';
import { Card } from '@heroui/card';

import { cn } from '@/utils/cn';

const ActionCard = (props: CardProps) => {
	return (
		<Card
			isPressable
			{...props}
			className={cn(
				'bg-gradient-to-b transition duration-300 from-background to-[#FFFFFF33] border-1 border-divider',
				props.className,
			)}
		/>
	);
};

export default ActionCard;
