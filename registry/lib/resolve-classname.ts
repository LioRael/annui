export function resolveClassName<T>(
	className: undefined | string | ((state: T) => string),
) {
	return (state: T) => {
		if (typeof className === "function") {
			return className(state);
		}
		return className;
	};
}
