const { Command } = require("commander");
const figlet = require("figlet");
const fs = require('fs')
require('dotenv').config();
import { 
  getEvents, 
  getTransaction, 
  getTxs, 
  uniqueToAndFrom, 
  repeatingTxHashes, 
  readUniqueFromCsv,
  merge,
  rapidNetwork
 } from './services';

const program = new Command();


program
    .version("1.0.0")
    .description("Hello sami!")
    .option("--from, --fromBlock <fromBlock>", "From Block")
    .option("--to, --toBlock <optional toBlock>", "To Block")
    .option("--fn, --fileName <optional fileName>", "File Name")
    .option("--fnFrom, --fileNameFrom <optional fileName>", "File Name From")
    .option("--fnTo, --fileNameTo <optional fileName>", "File Name To")
    .option("-h, hash", "Get tx hash")
    .option("--m, merge", "Merge")
    .option("--u, unique", "Unique")
    .option("--r, repeating tx hashes", "repeating")
    .option("--xyz, csv", "read csv")
    .option("--n, rapid network", 'rapid network')
    // In these options default value for events and tx files will taken as 'events.csv' and 'tx.csv' respectively
    
program.parse(process.argv);
const options = program.opts();
console.log(figlet.textSync("Hello world!"));

if(options.fromBlock) {
    getEvents(parseInt(options.fromBlock), options.toBlock, options.fileName)
}


else if(options.hash) {
    console.log('tx hash', options)
    getTxs(options.fileNameFrom, options.fileNameTo)
}

else if(options.merge) {
  console.log('merge working')
  merge()
}

else if(options.unique) {
  uniqueToAndFrom()
}

else if (options.repeating) {
  repeatingTxHashes()
}

else if(options.csv) {
  readUniqueFromCsv()
}

else if (options.rapid) {
  console.log('hello')
  rapidNetwork()
}

// COMMANDS
// node dist/index.js -h
// node dist/index.js --from 15047200 --to 15047400 --fn events
// node dist/index.js -h --fn events
// node dist/index.js --m