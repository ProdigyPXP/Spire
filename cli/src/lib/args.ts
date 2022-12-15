import arge from "arge";

/**
 * Parses arguments into a JSON object.
 */
const argparse = arge.arge;


const argv : string[] = process.argv.splice(1, process.argv.length);


export let args : any = argparse(argv);

export const task : string | null = argv[1] || null;
if (task) args.task = task;


export default args;