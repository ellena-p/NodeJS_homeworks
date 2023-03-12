import fs from "fs";

const readFile = (path) => {
    const fileContent = JSON.parse(fs.readFileSync(path, {encoding: "utf-8"}));
    return fileContent;
};

export default {
    readFile
}