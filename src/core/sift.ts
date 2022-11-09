import { plugin } from "./plugin.js";
import project from "./project.js";

/**
 * Sifts all the files through all given plugins
 */
export default function sift (Project : project, plugins: plugin[]) : project {

    let newFiles : project = Project;

    for (let plugin of plugins) {

        for (let file of Project.files) {
            newFiles.files[Project.files.indexOf(file)] = plugin(file);
        };

    }

    return newFiles;
}