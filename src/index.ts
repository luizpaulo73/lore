#!/usr/bin/env node
import { program } from "commander";
import { getGitData } from "./getGitData";
import { paramsResolver } from "./paramsResolver";

program
    .argument("[range...]")
    .option("--since <date>", "Start date expression (git --since)")
    .option("--until <date>", "End date expression (git --until)")
    .action((rangeParts: string[] = [], options: { since?: string; until?: string }) => {
        const data = getGitData(paramsResolver(rangeParts, options));
        console.log(JSON.stringify(data, null, 2));
    });

program
    .command("help")
    .description("Display help information")
    .action(() => { program.help() });

program.parse(process.argv);
