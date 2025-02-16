type Locale = (typeof import('@/types/locale').Locale)[keyof typeof import('@/types/locale').Locale];

type PropsWithLocale<T = unknown> = T & { locale?: Locale };

type PageParamsWithLocale<T = unknown> = Promise<T & { locale: Locale }>;

type PageSearchParams = Record<string, string | string[] | undefined>;

interface PagePropsWithLocale<TParams = unknown, TSearchParams extends PageSearchParams = PageSearchParams> {
	params: PageParamsWithLocale<TParams>;
	searchParams: Promise<TSearchParams>;
}
