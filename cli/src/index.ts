import args from "./lib/args.js";
import constants from "./lib/constants.js";
import { downloadPackage } from "./packages/download.js";

for (const item of Object.entries(args)) {
    console.log(item)
}

console.log("Spire Modules: " + constants.spire_modules)


downloadPackage("hello-world");