import { argv, task } from "../lib/args.js";
import InstallPackage from "./InstallPackage.js";

let Commands : Map<string, () => void> = new Map();

function Alias (source: string, alias: string) {
    Commands.set(alias, Commands.get(source)!);
}


Commands.set("install", () => {

    // Remove task and options
    const packages : string[] = argv.filter((item, index) => (index !== 0 && !item.startsWith("-")));
    

    for (let pkg of packages) {

        if (pkg.includes("@")) {
            const split = pkg.split("@");
            InstallPackage(split[0]!, split[1]!)
            // hello-world@1.0.0 => InstallPackage("hello-world", "1.0.0")
        } else InstallPackage(pkg)
    }
});


Alias("install", "i");





export default () => {
    console.log(task)
    Commands.get(task!)!()
};