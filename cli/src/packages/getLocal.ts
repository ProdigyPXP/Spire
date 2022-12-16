import fs from "fs";
import Package from "./Package";
import path from "path";
import constants from "../lib/constants";
import yaml from "yaml";
import KvArray from "src/lib/KvArray";

export default function getLocal (Name : string) : Package {

    const read = fs.readFileSync(path.join(constants.spire_modules, Name, "package.yml"), "utf8");
    const parsed = yaml.parse(read);

    const name : string = parsed["name"];
    const version : string = parsed["version"];
    const exports : KvArray = parsed["exports"];
    const dependencies : KvArray = parsed["dependencies"];
    
    return new Package(name, version, exports, dependencies);
}