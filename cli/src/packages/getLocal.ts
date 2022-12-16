import fs from "fs";
import Package from "./Package.js";
import path from "path";
import constants from "../lib/constants.js";
import parsePackage from "./parsePackage.js";

export default function getLocal (Name : string) : Package | null {

    const file = path.join(constants.spire_modules, Name, "package.yml");

    // Package not found.
    if (!fs.existsSync(file)) return null;

    const read = fs.readFileSync(file, "utf8");
    return parsePackage(read);
}