--- test/smoke/src/main.ts.orig	2019-09-03 21:16:39 UTC
+++ test/smoke/src/main.ts
@@ -90,6 +90,7 @@ function getDevElectronPath(): string {
 		case 'darwin':
 			return path.join(buildPath, 'electron', `${product.nameLong}.app`, 'Contents', 'MacOS', 'Electron');
 		case 'linux':
+		case 'freebsd':
 			return path.join(buildPath, 'electron', `${product.applicationName}`);
 		case 'win32':
 			return path.join(buildPath, 'electron', `${product.nameShort}.exe`);
@@ -102,7 +103,8 @@ function getBuildElectronPath(root: string): string {
 	switch (process.platform) {
 		case 'darwin':
 			return path.join(root, 'Contents', 'MacOS', 'Electron');
-		case 'linux': {
+		case 'linux':
+		case 'freebsd': {
 			const product = require(path.join(root, 'resources', 'app', 'product.json'));
 			return path.join(root, product.applicationName);
 		}
