import { SpireFile } from "../core/project.js";
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


        if (line.includes("$")) {

            for (let item of imports) {
                
            
                line.replaceAll("$" + item, PROJECT.references.get(item)!);
            };

            output += line + "\n";

        } else if (line.includes("import")) {

            let tokens : string[] = line.split(" ");
            let index = tokens.indexOf("import");
            let item = tokens[index + 1]!;
            let as = tokens[index + 2]!;
            let identifier = tokens[index + 3]!;


            if (as !== "as") {
                imports.push(item);
                process.stdout.write("\nItem " + item)
            } else {
                imports.push(identifier);
                process.stdout.write("\nIdent " + identifier)

            }


        } else {
            // If the line isn't an import and uses no imports, do nothing with the line.
            output += line + "\n";
        }
    }

    

    return new SpireFile(file.path, output);
}