const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } }); // iPhone 14
  
  // Open the local file
  await page.goto('file:///C:/Users/Hacer/.openclaw/workspace/pixel-flow/index.html');
  await page.waitForTimeout(2000);
  
  // Screenshot the menu
  await page.screenshot({ path: 'C:/Users/Hacer/.openclaw/workspace/pixel-flow/test-menu.png', fullPage: false });
  console.log('Menu screenshot taken');
  
  // Click SPIELEN button
  const playBtn = page.locator('#playBtn');
  if (await playBtn.isVisible()) {
    await playBtn.click();
    console.log('Clicked SPIELEN');
    await page.waitForTimeout(2000);
  }
  
  // Screenshot the game
  await page.screenshot({ path: 'C:/Users/Hacer/.openclaw/workspace/pixel-flow/test-game.png', fullPage: false });
  console.log('Game screenshot taken');
  
  // Try clicking a capsule
  const caps = page.locator('.cap:not(.dead)');
  const capCount = await caps.count();
  console.log('Capsules found:', capCount);
  if (capCount > 0) {
    await caps.first().click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'C:/Users/Hacer/.openclaw/workspace/pixel-flow/test-after-click.png', fullPage: false });
    console.log('Clicked first capsule');
  }
  
  // Check slot interaction
  const slots = page.locator('.slot.full');
  const slotCount = await slots.count();
  console.log('Full slots:', slotCount);
  
  // Check if bunnies appeared on belt
  const hintText = await page.locator('#hint').textContent();
  console.log('Hint text:', hintText);
  
  await browser.close();
  console.log('Done');
})();
