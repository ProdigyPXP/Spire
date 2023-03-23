import fs from "fs";
import path from "path";


export default interface project {

    path: string,

    files : Array<SpireFile>;

    references : Map<string, string>;

}

export class SpireFile {
    
    public path : string;

    public contents : string;


    constructor (path : string, contents : string) {
        this.path = path;
        this.contents = contents;
    }
}

export function CompileProject (Project : project) {

    for (let file of Project.files) {

        file.path = file.path.replace(".spire", ".bf");
        const OutPath = path.join(Project.path, "dist", file.path);
        
        process.stdout.write("{Path: " + OutPath + "\n, Contents: " + file.contents + "\n}\n");
        fs.writeFileSync(OutPath, file.contents)
    };

    Project.references.forEach(function (value, key) {
        process.stdout.write(`{Key: ${key}, Value: ${value}}\n`)
    });

}
