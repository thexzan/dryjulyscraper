const scraper = require("./scraper");

(async () => {
  const url = "https://www.dryjuly.com/";

  let data = await scraper.getData(url);
  console.log(data);
})();
