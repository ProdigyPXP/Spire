import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.resolve(fileURLToPath(import.meta.url), "..");

const constants = {
    
    store_url: "https://raw.githubusercontent.com/spire-bf/spire-store/master",

    spire_modules: path.resolve(__dirname, "../spire_modules")


} as const;

export default constants;