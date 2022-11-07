import fs from "fs";
import path from "path";
import project, { CompileProject, SpireFile } from "./core/project.js";
import sift from "./core/sift.js";
import { dirname } from "./dirname.js";
import CommentsPlugin from "./plugins/comments.js";
import ExportsPlugin from "./plugins/exports.js";

export default function Spire () {

    const FILE_PATH : string = path.join(dirname, "examples/HelloWorld/HelloWorld.spire");

    const file : string = fs.readFileSync(FILE_PATH, "utf8");

    process.stdout.write(file)

    let Project : project = {
        files: [new SpireFile(FILE_PATH, file)],
        references: new Map<string, string>()
    }

    sift(Project, CommentsPlugin)
    sift(Project, ExportsPlugin)

    CompileProject(Project);
}