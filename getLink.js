import { chromium } from 'playwright-chromium';

const launch_btn_selector = '.embed8-link.embed8-button';
const project_link_selector = '.embed8-link.embed8-button a';

async function getLink() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.8thwall.com/profcraig/test-digital-manipulative');
  
  await page.waitForSelector(launch_btn_selector);
  await page.click(launch_btn_selector); 

  await page.waitForSelector(project_link_selector);
  const linkHref = await page.$eval(project_link_selector, a => a.href); 

  await browser.close();

  return linkHref;
}

export { getLink };

