--- build/lib/preLaunch.ts.orig	2026-07-07 22:14:24 UTC
+++ build/lib/preLaunch.ts
@@ -32,19 +32,19 @@ async function ensureNodeModules() {
 	}
 }
 
-async function getElectron() {
-	// `npm run electron` deletes and re-downloads `.build/electron` on every
-	// invocation. When preLaunch runs repeatedly (e.g. once per integration test
-	// section) this is both wasteful and a source of flaky failures on Windows,
-	// where the just-exited Electron process can still hold file locks while the
-	// directory is being removed and re-extracted. Skip the refresh when the
-	// already-present Electron matches the expected version; any detection
-	// failure falls back to a (re)download to preserve the previous behavior.
-	if (await isExpectedElectronInstalled()) {
-		return;
-	}
-	await runProcess(npm, ['run', 'electron']);
-}
+// async function getElectron() {
+// 	// `npm run electron` deletes and re-downloads `.build/electron` on every
+// 	// invocation. When preLaunch runs repeatedly (e.g. once per integration test
+// 	// section) this is both wasteful and a source of flaky failures on Windows,
+// 	// where the just-exited Electron process can still hold file locks while the
+// 	// directory is being removed and re-extracted. Skip the refresh when the
+// 	// already-present Electron matches the expected version; any detection
+// 	// failure falls back to a (re)download to preserve the previous behavior.
+// 	if (await isExpectedElectronInstalled()) {
+// 		return;
+// 	}
+// 	await runProcess(npm, ['run', 'electron']);
+// }
 
 async function isExpectedElectronInstalled(): Promise<boolean> {
 	try {
@@ -65,7 +65,7 @@ async function main() {
 
 async function main() {
 	await ensureNodeModules();
-	await getElectron();
+	// await getElectron();
 	await ensureCompiled();
 
 	// Can't require this until after dependencies are installed
