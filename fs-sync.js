// fs module

const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

console.log(
    first,
    second
);

// this is an error because the files we are trying to read doesn't exist

// to write on a file we use writeFileSync

writeFileSync("./content/write_sync.txt", `read and write, ${first}, ${second} `, {flag:"a"})
