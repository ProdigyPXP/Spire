import args from "./lib/args.js";
import { downloadPackage } from "./packages/download.js";

for (const item of Object.entries(args)) {
    if (args.task === "i" && args["hello-world"] == true) {
        downloadPackage("hello-world");
    }
}
