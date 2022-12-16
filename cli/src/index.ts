import InstallPackage from "./InstallPackage.js";
import args, { argv, task } from "./lib/args.js";
import constants from "./lib/constants.js";

for (const item of Object.entries(args)) {
    console.log(item)
}


if (task === "install" || task === "i") {
    const td = argv[2]!;
    console.log(td);
    InstallPackage(td)
}

console.log("Spire Modules: " + constants.spire_modules)
