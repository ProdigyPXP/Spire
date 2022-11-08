import { SpireFile } from "../core/project.js";
import strip from "strip-indent";
import { PROJECT } from "../working.js";

/** 
 * Exports plugin for Spire to use import statements in a file.
 */
export default function plugin (file : SpireFile) : SpireFile {

    let code : string = file.contents;
    let lines : string[] = code.split("\n");
    let output : string = "";
    let imports : string[] = [];

    for (let line of lines) { 

        // If the file doesn't have any imports, don't bother with it.
        if (!strip(line).includes("import")) {

            for (let item of imports) {
                line.replaceAll("$" + item, PROJECT.references.get(item)!);
            };

            output += line + "\n";

        } else {

            let tokens : string[] = line.split(" ");
            let index = tokens.indexOf("export");
            let item = tokens[index + 1]!;
            let as = tokens[index + 2]!;
            let identifier = tokens[index + 3]!;


            if (as !== "as") {
                imports.push(item);
            } else {
                imports.push(identifier);
            }


        }
    }

    

    return new SpireFile(file.path, output);
}