import { Button } from '@heroui/button';
import type { FormProps } from '@heroui/form';
import { Form } from '@heroui/form';
import type { TextAreaProps } from '@heroui/input';
import { Textarea } from '@heroui/input';
import SendIcon from '@mui/icons-material/Send';
import { useTranslations } from 'next-intl';

import { cn } from '@/utils/cn';

interface Props {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	props?: {
		form?: FormProps;
		textarea?: TextAreaProps;
	};
}

const PromptInput = ({ onSubmit, value, onChange, props }: Props) => {
	const t = useTranslations('chat');
	return (
		<Form {...props?.form} className={cn('w-full', props?.form?.className)} onSubmit={onSubmit}>
			<Textarea
				aria-label="Prompt"
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
				{...props?.textarea}
				className={cn('min-h-[60px] w-full', props?.textarea?.className)}
				classNames={{
					label: ['hidden', props?.textarea?.classNames?.label],
					input: [
						'py-0 text-medium data-[has-start-content=true]:ps-0 data-[has-start-content=true]:pe-0',
						props?.textarea?.classNames?.input,
					],
					innerWrapper: ['items-center', props?.textarea?.classNames?.innerWrapper],
					inputWrapper: ['min-h-[60px] border-1', props?.textarea?.classNames?.inputWrapper],
				}}
				value={value}
				onChange={onChange}
			/>
		</Form>
	);
};

export default PromptInput;
