import KvArray from "../lib/KvArray.js";
import yaml from "yaml";
import Package from "./Package.js";

export default function parsePackage (read : any) : Package | null
export default function parsePackage (read : string) : Package | null {

    const parsed = (typeof read === "string") ? yaml.parse(read) : read;


    const name : string = parsed["name"];
    const version : string = parsed["version"];
    let exports : KvArray = parsed["exports"];
    let dependencies : KvArray = parsed["dependencies"];

    if (!name || !version) return null;
    if (!exports) exports = [];
    if (!dependencies) dependencies = [];

    return new Package(name, version, exports, dependencies);
}