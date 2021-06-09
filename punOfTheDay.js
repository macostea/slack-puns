const cheerio = require("cheerio");

exports.getRandomPun = async function(fetcher) {
  fetchFunction = fetcher;
  if (!fetchFunction) {
    fetchFunction = fetch;
  }
  const res = await fetchFunction("https://pun.me/random/");
  const text = await res.text();
  const $ = cheerio.load(text);

  $('ul[class="puns single"] li span').remove();

  return $('ul[class="puns single"] li').text();
};
