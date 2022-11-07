export default interface exports {

    files : Array<SpireFile>;

}

export class SpireFile {
    
    public readonly path : string;

    public contents : string;


    constructor (path : string, contents : string) {
        this.path = path;
        this.contents = contents;
    }
}