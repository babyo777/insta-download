const instagramDl = require("@sasmeee/igdl");
const url = "https://www.instagram.com/p/CwaCmxTIOQK/?igsh=MXQ2c2d1czY4amZsMA==";
async function g(){

    const dataList = await instagramDl(url);
    console.log(dataList);
}

g()

