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

        process.stdout.write("[File " + file.path + " |||||  " + file.contents + "   ]")
    };

    Project.references.forEach(function (value, key) {
        process.stdout.write("[Key: " + key + " |||| Value: " + value + "   ]")
    });

}
