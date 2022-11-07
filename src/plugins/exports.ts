import { SpireFile } from "../core/project.js";
import strip from "strip-indent";
import { PROJECT } from "../working.js";

/** 
 * Exports plugin for Spire to extract export statements from a file.
 */
export default function plugin (file : SpireFile) : SpireFile {

    let code : string = file.contents;
    let lines : string[] = code.split("\n");
    let output : string = "";

    for (let line of lines) { 

        // If the file doesn't have any exports, don't bother with it.
        if (!(strip(line).includes("export"))) {
            output += line;
        } else {

            let tokens : string[] = line.split(" ");
            let index = tokens.indexOf("export");
            let item = tokens[index + 1]!;
            let as = tokens[index + 2]!;
            let identifier = tokens[index + 3]!;


            if (as !== "as") {
                throw new Error("Expected 'as' in the export statement of:\n" + line)
            }

            if (item !== "all") {
                throw new Error("Non-all exports are not implemented:\n" + line)
            }

            PROJECT.references.set(identifier, code)

        }
    }

    return new SpireFile(file.path, output);
}