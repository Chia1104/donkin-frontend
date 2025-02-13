type I18N = (typeof import('@/utils/i18n').I18N)[keyof typeof import('@/utils/i18n').I18N];

type PropsWithLocale<T = unknown> = T & { locale?: I18N };

type PageParamsWithLocale<T = unknown> = Promise<T & { locale: I18N }>;

type PageSearchParams = Record<string, string | string[] | undefined>;

interface PagePropsWithLocale<TParams = unknown, TSearchParams extends PageSearchParams = PageSearchParams> {
	params: PageParamsWithLocale<TParams>;
	searchParams: Promise<TSearchParams>;
}
