import { Divider } from '@heroui/divider';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

const Footer = () => {
	const t = useTranslations('footer');
	return (
		<footer className="w-full flex justify-center items-center border-t-1 border-t-primary/25 h-[44px]">
			<div className="w-full max-w-[1440px] flex justify-between items-center text-foreground-500">
				<section className="flex gap-[10px] items-center">
					<Link className="text-[10px] leading-[12px]" href="#">
						{t('about')}
					</Link>
					<Divider orientation="vertical" className="bg-primary h-1" />
					<Link className="text-[10px] leading-[12px]" href="#">
						{t('privacy')}
					</Link>
					<Divider orientation="vertical" className="bg-primary h-1" />
					<Link className="text-[10px] leading-[12px]" href="#">
						{t('contact')}
					</Link>
				</section>
				<section>
					<span className="text-[10px] leading-[12px]">{t('copyright', { year: new Date().getFullYear() })}</span>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
