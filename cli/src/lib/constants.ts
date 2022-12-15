import path from "path";

const constants = {
    
    store_url: "https://raw.githubusercontent.com/spire-bf/spire-store/master",

    spire_modules: path.resolve(__dirname, "../spire_modules")


} as const;

export default constants;