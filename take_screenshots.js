const { chromium, devices } = require('playwright');
(async ()=>{
  const browser = await chromium.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.setViewportSize({width:1366,height:768});
  await page.goto('http://127.0.0.1:4202',{waitUntil:'networkidle'});
  await page.screenshot({path:'src/assets/screenshots/desktop-real.png',fullPage:true});
  const iPhone = devices['iPhone 12'];
  const context = await browser.newContext(iPhone);
  const page2 = await context.newPage();
  await page2.goto('http://127.0.0.1:4202',{waitUntil:'networkidle'});
  await page2.screenshot({path:'src/assets/screenshots/mobile-real.png',fullPage:true});
  await browser.close();
})();
