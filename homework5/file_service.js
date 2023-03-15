import fs from "fs";

const writeFile = (path, data) => {
    fs.writeFileSync(path, data);
};

const readFile = (path) => {
    const fileContent = JSON.parse(fs.readFileSync(path, {encoding: "utf-8"}));
    return fileContent;
};

const appendFile = (path, data) => {
    fs.appendFileSync(path, data)
};


export default {
    writeFile,
    readFile,
    appendFile
}