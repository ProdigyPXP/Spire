import fetch from "sync-fetch";
import yaml from "yaml";
import ver from "compare-versions";
import { download, FileOptions} from "progressive-downloader";
import constants from "../lib/constants.js";

export function downloadPackage (name : string, version : string = "latest") {


    const packageYml = `${constants.store_url}/${name}/package.yml`;
    const depDir = `/${constants.spire_modules}/${name}`;

    const request = fetch(packageYml);
    if (!request.ok) return console.log("package not found")

    const target = yaml.parse(request.text());

    if (version !== "latest") {
        const latestVer : number = target["version"];
        if (!ver.satisfies(latestVer.toString(), target)) {
            return console.log("bad version lol")
        }
    }



    let todoFiles : FileOptions[] = [
        {
            url: packageYml,
            path: `${depDir}/package.yml`
        }
    ]

    if (target.exports) {

        let exps : [string, string][] = Object.entries(target.exports);

        for (const item of exps) {

            todoFiles.push({
                url: `${constants.store_url}/${name}/${item[0]}`,
                path: `${depDir}/${item[0]}`
            });

        }
    }



    download(todoFiles, 
        p => {
            console.log("Progress: " + p)
        },
        f =>{
          console.log("File: " + f)  
        }
    );



    

    
    



}