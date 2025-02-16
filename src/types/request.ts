export interface BaseRequestOptions<TData = unknown> {
	data?: TData;
	signal?: AbortSignal;
}
