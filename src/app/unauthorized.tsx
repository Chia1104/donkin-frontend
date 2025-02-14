import { redirect } from '@/i18n/routing';

const Unauthorized = () => {
	redirect({
		href: '/sign-in',
		locale: 'zh-tw',
	});
};

export default Unauthorized;
