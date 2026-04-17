#!/usr/bin/env node
import { program } from "commander";

program
    .argument("<repo>")
    .argument("[range]")
    .action((repo, range = "today") => {
        console.log({ repo, range });
    });

program.parse(process.argv);
