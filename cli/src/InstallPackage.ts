import { downloadPackage } from "./packages/download.js";
import hasLocal from "./packages/hasLocal.js";

export default function InstallPackage (name : string, version : string = "latest") : boolean {

    // Already has package?
    if (hasLocal(name, version)) {
        console.log(`[${name}] Package is already installed.`);
        return true;
    }

    // Download the package
    const target = downloadPackage(name, version);

    // Download failed?
    if (target === null) {
        console.log(`[${name}] Download failed.`);
        return false;
    }

    // Download succeeded and has no dependencies.
    if (target.dependencies.length === 0) {
        console.log(`[${name}] No dependencies, Horray!`);
        return true;
    }


    for (const dep of target.dependencies) {

        let Dep = Object.entries(dep)[0]!
        let DepName = Dep[0];
        let DepVer = Dep[1];

        if (downloadPackage(DepName, DepVer) === null) {
            console.error("Could not resolve dependency");
            return false;
        } 
    }

    console.log(`[${name}] Done!`);
    return true;
}   