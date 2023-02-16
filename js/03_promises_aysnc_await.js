let fs = require("fs/promises");

let a = fs.readFile("file.txt", "utf-8");
a.then((data) => {
    // console.log(data);
})
// console.log("this is end of file");

const readThree = async (file1, file2, file3) => {
    let a1 = fs.readFile(file1, "utf-8");
    let a2 = fs.readFile(file2, "utf-8");
    let a3 = fs.readFile(file3, "utf-8");

    let content1 = await a1;
    console.log(content1);
    let content2 = await a2;
    console.log(content2);
    let content3 = await a3;
    console.log(content3);
}

readThree("file1.txt", "file2.txt", "file3.txt")