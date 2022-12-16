import fetch from "sync-fetch";
import yaml from "yaml";
import ver from "compare-versions";
import { download, FileOptions} from "progressive-downloader";
import constants from "../lib/constants.js";

export function downloadPackage (name : string, version : string = "latest") {


    const packageYml = `${constants.store_url}/packages/${name}/package.yml`;
    const depDir = `/${constants.spire_modules}/${name}`;

    const request = fetch(packageYml);

    console.log(packageYml)

    if (!request.ok) return console.log("package not found");

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

        const exps : [string, any][] = Object.entries(target.exports);

        for (const item of exps) {

            const ItemName = Object.entries(item[1])[0]![0];

            console.log(ItemName);
            console.log(JSON.stringify(item));

            todoFiles.push({
                url: `${constants.store_url}/packages/${name}/${ItemName}`,
                path: `${depDir}/${ItemName}`
            });

        }
    }


    download(todoFiles, 
        _ => {},
        f =>{
          console.log("File: " + f)  
        }
    ).catch(reason => {
        console.error(reason);
    })



    

    
    



}