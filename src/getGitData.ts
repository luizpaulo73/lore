import { execSync } from "child_process";
import { getGitDataReturnType } from "./types/gitManagement";

export function getGitData(range: string): getGitDataReturnType {
    let since = "1 day ago";

    if (range === "today") {
        since = "1 day ago";
    }

    if (range === "yesterday") {
        since = "2 days ago";
    }

    if (range === "week") {
        since = "7 days ago";
    }

    const log = execSync(`git log --oneline --since="${since}"`)
        .toString()
        .trim();

    const diff = execSync("git diff --stat").toString().trim();

    return { range, log, diff }
}
