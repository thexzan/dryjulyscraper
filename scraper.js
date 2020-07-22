const axios = require("axios");
const moment = require("moment");
const cheerio = require("cheerio");

const scraper = {
  getData: async url => {
    // THIS ONLY GET THE WEBPAGE
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const time = moment().format("MMM DD, HH:mm");

    let people = $("div.user-stat").remove().text().trim().split("\n")[0];
    let total = $("div.total-stat").remove().text().trim().split("\n")[0];

    let result = { time, people, total };
    return result;
  }
};

module.exports = scraper;
