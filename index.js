import fs from "fs";

fs.writeFileSync("text.txt", "Hello there");
const data = fs.readFileSync("text.txt", "utf-8");
console.log(data);
