export default interface project {

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

        if (file.path.includes("index.bf"))
        process.stdout.write("{Path: " + file.path + "\n, Contents: " + file.contents + "\n}\n");
    };

    Project.references.forEach(function (value, key) {
        process.stdout.write(`{Key: ${key}, Value: ${value}}\n`)
    });

}
