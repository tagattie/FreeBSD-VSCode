--- test/integration/browser/src/index.ts.orig	2021-06-17 12:10:36 UTC
+++ test/integration/browser/src/index.ts
@@ -32,7 +32,7 @@ const height = 800;
 type BrowserType = 'chromium' | 'firefox' | 'webkit';
 
 async function runTestsInBrowser(browserType: BrowserType, endpoint: url.UrlWithStringQuery, server: cp.ChildProcess): Promise<void> {
-	const args = process.platform === 'linux' && browserType === 'chromium' ? ['--disable-setuid-sandbox'] : undefined; // setuid sandboxes requires root and is used in containers so we disable this to support our CI
+	const args = (process.platform === 'linux' || process.platform === 'freebsd') && browserType === 'chromium' ? ['--disable-setuid-sandbox'] : undefined; // setuid sandboxes requires root and is used in containers so we disable this to support our CI
 	const browser = await playwright[browserType].launch({ headless: !Boolean(optimist.argv.debug), args });
 	const context = await browser.newContext();
 	const page = await context.newPage();
