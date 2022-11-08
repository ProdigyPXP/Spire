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

    const HelloWorld_path : string = path.join(dirname, "examples/HelloWorld/HelloWorld.spire");
    const Index_path : string = path.join(dirname, "examples/HelloWorld/index.spire");

    const HelloWorld : string = fs.readFileSync(HelloWorld_path, "utf8");
    const Index : string = fs.readFileSync(Index_path, "utf8");


    SetProject({
        files: [new SpireFile(HelloWorld_path, HelloWorld), new SpireFile(Index_path, Index)],
        references: new Map<string, string>()
    })

    SetProject(sift(PROJECT, [CommentsPlugin, ExportsPlugin, ImportsPlugin, MinifierPlugin]));

    CompileProject(PROJECT);
}