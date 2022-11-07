export default interface project {

    files : Array<SpireFile>;

    references : Map<string, string>;

}

export class SpireFile {
    
    public readonly path : string;

    public contents : string;


    constructor (path : string, contents : string) {
        this.path = path;
        this.contents = contents;
    }
}

export function CompileProject (Project : project) {

    Project.files.forEach(element => {
        process.stdout.write("[FILE " + element.path + " |||||  " + element.contents + "   ]")
    });

    Project.references.forEach((value, key) => {
        process.stdout.write("[Key: " + key + " |||| Value: " + value + "   ]")
    });

}
