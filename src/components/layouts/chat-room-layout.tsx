'use client';

import { Navbar, NavbarContent, NavbarItem, Button, Avatar } from '@heroui/react';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { noto_sans } from '@/themes/fonts';
import { cn } from '@/utils/cn';

import Donkin from '../commons/donkin';

interface Props {
	children: React.ReactNode;
}

const ChatRoomLayout = (props: Props) => {
	const t = useTranslations('nav');
	const tAction = useTranslations('action');

	return (
		<>
			<Navbar
				isBordered
				classNames={{
					item: ['data-[active=true]:text-primary'],
					wrapper: ['max-w-[1440px]', 'h-full'],
					base: ['h-[72px]'],
				}}
			>
				<NavbarContent className={cn('hidden sm:flex gap-4', noto_sans.className)} justify="start">
					<Donkin />
					<NavbarItem>
						<Link href="#">{t('ai-signal')}</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="#">{t('whale-ranking')}</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="#">{t('smart-rankings')}</Link>
					</NavbarItem>
					<Button
						variant="bordered"
						className="rounded-full border-1 w-[200px] justify-between"
						endContent={
							<SearchIcon
								sx={{
									width: 22,
									height: 22,
								}}
							/>
						}
					>
						<span className="text-foreground-400">{t('search-placeholder')}</span>
					</Button>
				</NavbarContent>
				<NavbarContent justify="end">
					<Button color="primary" className="rounded-full" startContent={<AccountBalanceWalletOutlinedIcon />}>
						{tAction('connect-wallet')}
					</Button>
					<Avatar />
				</NavbarContent>
			</Navbar>
			<main className="flex flex-col items-center justify-center min-h-screen">{props.children}</main>
		</>
	);
};

export default ChatRoomLayout;
