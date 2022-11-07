import project, { SpireFile } from "./project.js";

/**
 * Sifts all the files through a plugin
 */
export default function sift (files : project, plugin: (arg0: SpireFile) => SpireFile) {


    for (let file of files.files) {
        file = plugin(file);
    }

}