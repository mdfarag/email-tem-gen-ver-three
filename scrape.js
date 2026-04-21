const puppeteer = require('puppeteer');

const scrapProduct = async (urls) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--single-process'
        ],
    });

    const page = await browser.newPage();
    // تعيين User-Agent لتبدو كمتصفح حقيقي وتجنب الحظر
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');

    let pdList = [];
    let listUrls = Object.values(urls);

    try {
        for (let i = 0; i < listUrls.length; i++) {
            let url = listUrls[i];
            
            try {
                // الانتظار حتى تستقر الشبكة
                await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
                
                // انتظر ظهور وسم h1 على الأقل للتأكد من تحميل المحتوى
                await page.waitForSelector('h1', { timeout: 10000 });

                const product = await page.evaluate(() => {
                    const getTxt = (sel) => document.querySelector(sel)?.innerText?.trim() || '';
                    const getAttr = (sel, attr) => document.querySelector(sel)?.getAttribute(attr) || '';

                    // جلب السعر الجديد مع حماية إضافية
                    let aftPrice = getTxt('.flex.items-baseline.flex-wrap.gap-3 .text-3xl.text-functional-red-800');
                    if (!aftPrice) {
                        // محاولة جلب السعر الافتراضي بـ selector أبسط إذا فشل المعقد
                        aftPrice = getTxt('h3') || getTxt('[class*="price"]'); 
                    }

                    return {
                        pdName: getTxt('h1'),
                        pdImg: getAttr('.relative.w-full.col-span-12.min-h-fit > span > img', 'src'),
                        pdBfrPrice: getTxt('.flex.items-baseline.flex-wrap.gap-3 .text-base.line-through'),
                        pdAftPrice: aftPrice,
                        pdSvAmnt: getTxt('.text-base.bg-functional-red-600.text-white.px-2.leading-1.align-text-top.inline-block.font-normal.self-center.mb-1'),
                        pdBestSeller: getTxt('.px-3.py-1.text-base.text-white.leading-2.self-start.bg-functional-green-400')
                    };
                });

                pdList.push(product);
            } catch (err) {
                console.error(`Error scraping individual URL: ${url}`, err.message);
                // استمر في الحلقة حتى لو فشل رابط واحد
                continue;
            }
        }

        console.log("pd list from scrape is: ", pdList);
        return pdList;
    } catch (error) {
        console.error('General scraping error:', error);
        return [];
    } finally {
        await browser.close();
    }
};

module.exports = scrapProduct;
