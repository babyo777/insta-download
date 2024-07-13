const axios = require("axios");
const cheerio = require("cheerio");
async function getLinks(link) {
  const formData = new FormData();
  formData.append("recaptchaToken", "");
  formData.append("q", link);
  formData.append("t", "media");
  formData.append("lang", "en");
  const res = await axios.post(
    "https://v3.igdownloader.app/api/ajaxSearch",
    formData
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
