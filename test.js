const instagramDl = require("./index");

const url = "https://www.instagram.com/reel/C2GyBFoSOdd/?igsh=MWd2YXk5ajZib25qMQ==";

async function run() {
  try {
    const dataList = await instagramDl(url);
    console.log(dataList);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();  