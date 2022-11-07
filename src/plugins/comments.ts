import { SpireFile } from "../core/project.js";
import strip from "strip-indent";

/** 
 * Comments plugin for Spire to make a proper syntax for comments in Brainfuck. 
 */
export default function plugin (file : SpireFile) : SpireFile {

    let code = file.contents;
    let lines = code.split("\n");
    let output : string = "";

    for (let line of lines) {

        // Excluding whitespaces, If the line starts with #, treat it as a comment.
        if (!(strip(line).startsWith("#"))) {
            output += line;
        }
    }

    return new SpireFile(file.path, code);
}