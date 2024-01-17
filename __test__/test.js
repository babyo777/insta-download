const instagramDl = require("../utils/insta");

const url = "https://www.instagram.com/p/CwaCmxTIOQK/?igsh=MXQ2c2d1czY4amZsMA==";

async function run() {
  try {
    const dataList = await instagramDl(url);
    console.log(dataList);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();  