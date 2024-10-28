const puppeteer = require('puppeteer');

const scrapProduct = async (urls) => {
    const browser = await puppeteer.launch(
        {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }
    );

    const page = await browser.newPage();

    let product = {};
    let pdList = [];
    listUrls = Object.values(urls);

    try {

        for (let i = 0; i < listUrls.length; i++) {
            let url = listUrls[i];

            //make sure every single URL is Correct and valid

            await page.goto(url, { timeout: 0 });

            // scrapping product Name
            const pdName = await page.evaluate(() => {
                if (document.querySelector('h1')) {
                    return document.querySelector('h1').innerText;
                } else {
                    return '';
                }
            });

            // scrapping product Image
            const pdImg = await page.evaluate(() => {
                if (document.querySelector('.relative.w-full.col-span-12.min-h-fit > span > img')) {
                    return document.querySelector('.relative.w-full.col-span-12.min-h-fit > span > img').getAttribute('src');
                } else {
                    return '';
                }
            });

            // scrapping product old Price
            const pdBfrPrice = await page.evaluate(() => {
                if (document.querySelector('.flex.items-baseline.flex-wrap.gap-3 .text-base.line-through')) {
                    return document.querySelector('.flex.items-baseline.flex-wrap.gap-3 .text-base.line-through').innerText;
                } else {
                    return '';
                }
            });

            // scrapping product new Price
            const pdAftPrice = await page.evaluate(() => {
                if (document.querySelector('.flex.items-baseline.flex-wrap.gap-3 .text-3xl.text-functional-red-800')) {
                    return document.querySelector('.flex.items-baseline.flex-wrap.gap-3 .text-3xl.text-functional-red-800').innerText;
                } else {
                    //// here if there is no discount we return the default price
                    return document.querySelector("#__next > main > div.flex.mx-auto.mb-11.md\\:mb-15.flex-col.sm\\:flex-row.xl\\:container > div.flex-1.pt-10.px-5.sm\\:grid.sm\\:grid-cols-6.sm\\:gap-x-5.sm\\:pl-10.sm\\:pt-20.lg\\:pl-20 > div > h3").innerText;
                }
            });

            // scrapping product sale amount
            const pdSvAmnt = await page.evaluate(() => {
                if (document.querySelector('.text-base.bg-functional-red-600.text-white.px-2.leading-1.align-text-top.inline-block.font-normal.self-center.mb-1')) {
                    return document.querySelector('.text-base.bg-functional-red-600.text-white.px-2.leading-1.align-text-top.inline-block.font-normal.self-center.mb-1').innerText;
                } else {

                    return '';
                }
            });

            // scrapping best seller watermark
            const pdBestSeller = await page.evaluate(() => {
                if (document.querySelector('.px-3.py-1.text-base.text-white.leading-2.self-start.bg-functional-green-400')) {
                    return document.querySelector('.px-3.py-1.text-base.text-white.leading-2.self-start.bg-functional-green-400').innerText;
                } else {
                    return '';
                }
            });

            product = {
                pdName,
                pdImg,
                pdBfrPrice,
                pdAftPrice,
                pdSvAmnt,
                pdBestSeller
            };

            pdList.push(product);
        }

        console.log("pd list from scrape is: ", pdList)

        return pdList;
    } catch (error) {
        console.error('Error during scraping:', error);
        return [];
    } finally {
        await browser.close();
    }
};


module.exports = scrapProduct;


