--- scripts/code-perf.js.orig	2025-06-11 13:47:56 UTC
+++ scripts/code-perf.js
@@ -65,7 +65,8 @@ function getExePath(buildPath) {
 		case 'darwin':
 			relativeExePath = path.join('Contents', 'MacOS', 'Electron');
 			break;
-		case 'linux': {
+		case 'linux':
+		case 'freebsd': {
 			const product = require(path.join(buildPath, 'resources', 'app', 'product.json'));
 			relativeExePath = product.applicationName;
 			break;
