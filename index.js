const scraper = require("./scraper");
const fs = require("fs");

(async () => {
  const url = "https://www.dryjuly.com/";

  const data = await scraper.getData(url);
  // console.log(data);
  const data2csv = `\n"${data.time}","${data.people}","${data.total}"`;
  fs.appendFileSync("data.csv", data2csv);
})();
