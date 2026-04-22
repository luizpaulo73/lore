import { promptStructureInput } from "../types/gitManagement";

export function promptStructure(input: promptStructureInput): string {
    return `
You are a senior software engineer assistant.

Summarize the work done based on git history.

Rules:
- Be concise
- Use bullet points
- Focus on WHAT was done (not commit hashes)
- Group related changes
- Ignore noise

Time range: ${input.range}

Commits:
${input.log}

Diff stats:
${input.diff}
`;
}