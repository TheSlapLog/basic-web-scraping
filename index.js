const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const { generateSlug } = require('random-word-slugs');
const randomDomains = require('random-domains');

const slug = generateSlug();

(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(`http://${randomDomains({ tld: 'com'})}`);
    await page.screenshot({ path: `images/${slug}.png`});

    await browser.close()
})();
