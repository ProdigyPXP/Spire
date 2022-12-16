import Commands from "./commands/Commands.js";
import args from "./lib/args.js";
import constants from "./lib/constants.js";

for (const item of Object.entries(args)) {
    console.log(item) // console.log all the args
}

Commands();


console.log("Spire Modules: " + constants.spire_modules)
