--- test/smoke/src/main.ts.orig	2021-08-18 23:34:31 UTC
+++ test/smoke/src/main.ts
@@ -99,7 +99,7 @@ if (!opts.web) {
 		switch (process.platform) {
 			case 'darwin':
 				return path.join(buildPath, 'electron', `${product.nameLong}.app`, 'Contents', 'MacOS', 'Electron');
-			case 'linux':
+			case 'linux': case 'freebsd':
 				return path.join(buildPath, 'electron', `${product.applicationName}`);
 			case 'win32':
 				return path.join(buildPath, 'electron', `${product.nameShort}.exe`);
@@ -112,7 +112,7 @@ if (!opts.web) {
 		switch (process.platform) {
 			case 'darwin':
 				return path.join(root, 'Contents', 'MacOS', 'Electron');
-			case 'linux': {
+			case 'linux': case 'freebsd': {
 				const product = require(path.join(root, 'resources', 'app', 'product.json'));
 				return path.join(root, product.applicationName);
 			}
