const instagramDl = require("../utils/insta");

const url = "https://www.instagram.com/p/CwaCmxTIOQK/?igsh=MXQ2c2d1czY4amZsMA==";

async function run() {
  try {
    // Validate that the URL is a valid Instagram post URL
    if (!url || !url.match(/^https:\/\/www\.instagram\.com\/p\/[\w-]+/)) {
      throw new Error('Invalid Instagram post URL');
    }
    const dataList = await instagramDl(url);
    console.log(dataList);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();  