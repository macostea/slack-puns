const cheerio = require('cheerio')
const fetch = require('node-fetch')

exports.getRandomPun = async function() {
    const res = await fetch("https://pun.me/random/")
    const text = await res.text()
    const $ = cheerio.load(text)

    $('ul[class="puns single"] li span').remove()

    return $('ul[class="puns single"] li').text()
}
