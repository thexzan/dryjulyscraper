const scraper = require("./scraper");
const { Parser } = require("json2csv");
const fs = require("fs");

(async () => {
  const url = "https://www.dryjuly.com/";

  let data = await scraper.getData(url);
  // console.log(data);
  try {
    const fields = ["time", "people", "total"];
    const parser = new Parser(fields);
    const csv = parser.parse(data);
    console.log(csv);
    fs.writeFileSync("data.csv", csv);
    debugger;
  } catch (err) {
    console.error(err);
  }
})();
