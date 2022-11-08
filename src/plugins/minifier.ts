import { SpireFile } from "../core/project.js";

/** 
 * Minification plugin for Spire to minify/compress Brainfuck lines to one line of code.
 */
export default function plugin (file : SpireFile) : SpireFile {

    
    let code = file.contents;
    let lines = code.split("\n");
    let output : string = "";

    for (let line of lines) {
        output += line;
    }

    return new SpireFile(file.path, output);
}