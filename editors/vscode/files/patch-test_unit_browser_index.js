--- test/unit/browser/index.js.orig	2021-06-17 12:10:36 UTC
+++ test/unit/browser/index.js
@@ -146,7 +146,7 @@ function consoleLogFn(msg) {
 }
 
 async function runTestsInBrowser(testModules, browserType) {
-	const args = process.platform === 'linux' && browserType === 'chromium' ? ['--disable-setuid-sandbox'] : undefined; // setuid sandboxes requires root and is used in containers so we disable this to support our CI
+	const args = (process.platform === 'linux' || process.platform === 'freebsd') && browserType === 'chromium' ? ['--disable-setuid-sandbox'] : undefined; // setuid sandboxes requires root and is used in containers so we disable this to support our CI
 	const browser = await playwright[browserType].launch({ headless: !Boolean(argv.debug), args });
 	const context = await browser.newContext();
 	const page = await context.newPage();
