const axios = require("axios");
const cheerio = require("cheerio");
async function getLinks(link) {
  const formData = new FormData();
  formData.append("recaptchaToken", "");
  formData.append("q", link);
  formData.append("t", "media");
  formData.append("lang", "en");

  const headers = {
    Accept: "*/*",
    Origin: "https://saveig.app",
    Referer: "https://saveig.app/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Content-Type": "application/x-www-form-urlencoded",
    "Sec-Ch-Ua":
      '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183",
    "X-Requested-With": "XMLHttpRequest",
  };

  const res = await axios.post(
    "https://v3.saveig.app/api/ajaxSearch",
    formData,
    { headers }
  );
  const $ = cheerio.load(res.data.data);

  const data = [];

  $(".download-items").each(function () {
    const thumbnail_link =
      $(this).find(".download-items__thumb img").attr("data-src") ||
      $(this).find(".download-items__thumb img").attr("src");

    const download_link = $(this).find(".download-items__btn a").attr("href");

    data.push({
      thumbnail_link,
      download_link,
    });
  });

  return data;
}

module.exports = getLinks;
