export type getGitDataReturnType = {
    range: string;
    since?: string;
    until?: string;
    log: string;
    diff: string;
}

export type getGitDataInput = {
    range?: string;
    since?: string;
    until?: string;
}

export type promptStructureInput = {
    log: string;
    diff: string;
    range?: string;
}