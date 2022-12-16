import { satisfies } from "compare-versions";
import getLocal from "./getLocal.js"

export default function hasLocal (name : string, version : string | null = null) : boolean {
    
    const installation = getLocal(name);

    if (installation === null) return false;
    if (version === null || version === "latest") return true;
    
    return satisfies(installation.version, version);
}