export class ParseJSONError extends Error {
	constructor(public readonly error: Error) {
		super('Failed to parse JSON');
	}
}
