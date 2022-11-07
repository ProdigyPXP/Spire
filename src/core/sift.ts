import exports, { SpireFile } from "./exports.js";

/**
 * Sifts all the files through a plugin
 */
export default function sift (files : exports, plugin: (arg0: SpireFile) => SpireFile) {


    for (let file of files.files) {
        file = plugin(file);
    }

}