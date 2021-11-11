--- src/bootstrap-node.js.orig	2021-06-17 12:10:36 UTC
+++ src/bootstrap-node.js
@@ -131,7 +131,7 @@ exports.configurePortable = function (product) {
 			return process.env['VSCODE_PORTABLE'];
 		}
 
-		if (process.platform === 'win32' || process.platform === 'linux') {
+		if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 			return path.join(getApplicationPath(path), 'data');
 		}
 
