import args from "./lib/args.js";
import { downloadPackage } from "./packages/download.js";

if (args.task === "i" && args["hello-world"] == true) {
    downloadPackage("hello-world");
}
