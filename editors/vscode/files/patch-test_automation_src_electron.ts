--- test/automation/src/electron.ts.orig	2022-10-12 10:08:52 UTC
+++ test/automation/src/electron.ts
@@ -92,7 +92,7 @@ export function getDevElectronPath(): string {
 	switch (process.platform) {
 		case 'darwin':
 			return join(buildPath, 'electron', `${product.nameLong}.app`, 'Contents', 'MacOS', 'Electron');
-		case 'linux':
+		case 'linux': case 'freebsd':
 			return join(buildPath, 'electron', `${product.applicationName}`);
 		case 'win32':
 			return join(buildPath, 'electron', `${product.nameShort}.exe`);
@@ -105,7 +105,7 @@ export function getBuildElectronPath(root: string): st
 	switch (process.platform) {
 		case 'darwin':
 			return join(root, 'Contents', 'MacOS', 'Electron');
-		case 'linux': {
+		case 'linux': case 'freebsd': {
 			const product = require(join(root, 'resources', 'app', 'product.json'));
 			return join(root, product.applicationName);
 		}
