import KvArray from "../lib/KvArray";

export default class Package {

    public name : string
    
    public version : string

    public exports : KvArray

    public dependencies : KvArray


    public constructor (Name : string, Version : string, Exports : KvArray, Dependencies : KvArray) {
        this.name = Name;
        this.version = Version;
        this.exports = Exports;
        this.dependencies = Dependencies;
    }

}