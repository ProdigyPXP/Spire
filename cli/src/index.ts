import argparse from "./lib/argparse.js";

export const task = process.argv[0];
export const args = argparse(process.argv.splice(1, process.argv.length));

process.stdout.write(JSON.stringify(args));