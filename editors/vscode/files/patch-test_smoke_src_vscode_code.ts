--- test/smoke/src/vscode/code.ts.orig	2019-06-08 04:51:50 UTC
+++ test/smoke/src/vscode/code.ts
@@ -23,6 +23,7 @@ function getDevElectronPath(): string {
 		case 'darwin':
 			return path.join(buildPath, 'electron', `${product.nameLong}.app`, 'Contents', 'MacOS', 'Electron');
 		case 'linux':
+		case 'freebsd':
 			return path.join(buildPath, 'electron', `${product.applicationName}`);
 		case 'win32':
 			return path.join(buildPath, 'electron', `${product.nameShort}.exe`);
@@ -35,7 +36,8 @@ function getBuildElectronPath(root: string): string {
 	switch (process.platform) {
 		case 'darwin':
 			return path.join(root, 'Contents', 'MacOS', 'Electron');
-		case 'linux': {
+		case 'linux':
+		case 'freebsd': {
 			const product = require(path.join(root, 'resources', 'app', 'product.json'));
 			return path.join(root, product.applicationName);
 		}
