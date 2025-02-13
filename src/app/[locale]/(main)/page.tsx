import { redirect } from '@/i18n/routing';

const Page = async (props: PagePropsWithLocale) => {
	const id = crypto.getRandomValues(new Uint32Array(1))[0];
	const locale = (await props.params).locale;
	redirect({
		href: `/chat/${id}`,
		locale,
	});
};

export default Page;
