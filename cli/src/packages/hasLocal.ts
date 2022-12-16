import getLocal from "./getLocal.js"

export default function hasLocal (name : string, version : string | null = null) : boolean {
    
    const installation = getLocal(name);

    if (installation === null) return false;
    if (version === null) return true;
    if (installation.version !== version) return false;
    if (installation.version === version) return true;

    else throw Error("This shouldn't be happening. What the fuck.");
}