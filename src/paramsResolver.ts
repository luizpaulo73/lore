import { getGitDataInput } from "./types/gitManagement";

type ParamsResolverOptions = {
	since?: string;
	until?: string;
};

export function paramsResolver(rangeParts: string[] = [], options: ParamsResolverOptions = {}): getGitDataInput {
	let parsedSince: string | undefined;
	let parsedUntil: string | undefined;
	const remainingParts: string[] = [];

	for (const part of rangeParts) {
		if (!parsedSince && part.startsWith("since=")) {
			parsedSince = part.slice("since=".length).trim();
			continue;
		}

		if (!parsedUntil && part.startsWith("until=")) {
			parsedUntil = part.slice("until=".length).trim();
			continue;
		}

		remainingParts.push(part);
	}

	const range = remainingParts.join(" ").trim();

	return {
		range: range || undefined,
		since: options.since ?? parsedSince,
		until: options.until ?? parsedUntil
	};
}