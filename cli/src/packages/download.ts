import fetch from "sync-fetch";
import ver from "compare-versions";
import { download, FileOptions} from "progressive-downloader";
import constants from "../lib/constants.js";
import Package from "./Package.js";
import parsePackage from "./parsePackage.js";

export function downloadPackage (name : string, version : string = "latest") : Package | null {


    const packageYml = `${constants.store_url}/packages/${name}/package.yml`;
    const depDir = `/${constants.spire_modules}/${name}`;

    const request = fetch(packageYml);


    if (!request.ok) { console.log("package not found"); return null; }

    const target = parsePackage(request.text());
    if (target === null) return null;

    if (version !== "latest") {
        const latestVer : string = target.version;
        if (!ver.satisfies(latestVer, version)) {
            console.log("bad version lol");
            return null;
        }
    }



    let todoFiles : FileOptions[] = [
        {
            url: packageYml,
            path: `${depDir}/package.yml`
        }
    ]

    if (target.exports) {


        for (const item of target.exports) {

            let Item = Object.entries(item)[0]!
            let ItemFile = Item[0];
            let ItemName = Item[1];

            console.log(`[${target.name}] Export ${ItemName} from ${ItemFile}`);

            todoFiles.push({
                url: `${constants.store_url}/packages/${name}/${ItemFile}`,
                path: `${depDir}/${ItemFile}`
            });

        }
    }

    const TotalFiles = todoFiles.length;


    download(todoFiles, 
        _ => {},
        f =>{
          console.log(`[${target.name}] Downloaded file ${f} of ${TotalFiles}`)  
        }
    ).catch(reason => {
        console.error(reason);
    });


    return target;
}