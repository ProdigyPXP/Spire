import { plugin } from "./plugin.js";
import project from "./project.js";

/**
 * Sifts all the files through all given plugins
 */
export default function sift (files : project, plugins: plugin[]) : project {

    let newFiles : project = files;

    for (let file of files.files) {

        plugins.forEach(function (plugin : plugin) {
            newFiles.files[files.files.indexOf(file)] = plugin(file);
        });

    }

    return newFiles;
}