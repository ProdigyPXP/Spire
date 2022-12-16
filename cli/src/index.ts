import args, { argv, task } from "./lib/args.js";
import constants from "./lib/constants.js";
import { downloadPackage } from "./packages/download.js";

for (const item of Object.entries(args)) {
    console.log(item)
}


if (task === "install" || task === "i") {
    const td = argv[2]!;
    console.log(td);
    downloadPackage(td)
}

console.log("Spire Modules: " + constants.spire_modules)
