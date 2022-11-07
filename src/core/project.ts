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
