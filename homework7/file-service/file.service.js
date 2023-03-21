import fsPromises from "fs/promises";

const writeFile = async(path, data) => {
   await fsPromises.writeFile(path, data);
};

const readFile = async(path) => {
    const fileContent = await fsPromises.readFile(path, {encoding: "utf-8"});
    const parsedContent = JSON.parse(fileContent)
    return parsedContent;
};

const appendFile = async(path, data) => {
    await fsPromises.appendFile(path, data)
};


export default {
    writeFile,
    readFile,
    appendFile
}