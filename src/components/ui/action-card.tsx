import type { CardProps } from '@heroui/card';
import { Card, CardBody } from '@heroui/card';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

const Icon = ({ children }: { children: React.ReactElement }) => {
	return (
		<div className="w-6 h-6 border-divider rounded-full gap-4 flex justify-center items-center bg-gradient-to-b from-background to-[#FFFFFF33] border-1">
			{children}
		</div>
	);
};

export const ActionBody = ({ icon, label }: { icon: React.ReactElement; label: React.ReactNode }) => {
	return (
		<CardBody className="flex flex-row items-center justify-between">
			<span className="flex gap-2 items-center">
				<Icon>{icon}</Icon>
				{label}
			</span>
			<ChevronRightIcon />
		</CardBody>
	);
};

export default ActionCard;
