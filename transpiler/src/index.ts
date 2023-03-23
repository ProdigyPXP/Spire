import fs from "fs";
import path from "path";
import { CompileProject, SpireFile } from "./core/project.js";
import sift from "./core/sift.js";
import { dirname } from "./dirname.js";
import CommentsPlugin from "./plugins/comments.js";
import ExportsPlugin from "./plugins/exports.js";
import ImportsPlugin from "./plugins/imports.js"
import MinifierPlugin from "./plugins/minifier.js";
import { PROJECT, SetProject } from "./working.js";

export default function Spire () {

    let files : SpireFile[] = [];
    const HelloWorld : string = path.join(dirname, "..", "examples", "HelloWorld");
    const src = path.join(HelloWorld, "src")

    fs.readdirSync(src).forEach(function (filePath) {
        process.stdout.write("\n" + filePath + "\n")
        files.push(new SpireFile(filePath, fs.readFileSync(path.join(src, filePath), "utf8")));  
    });



    SetProject({
        path: HelloWorld,
        files: files,
        references: new Map<string, string>()
    })

    SetProject(sift(PROJECT, [CommentsPlugin, ExportsPlugin, ImportsPlugin, MinifierPlugin]));

    CompileProject(PROJECT);
}