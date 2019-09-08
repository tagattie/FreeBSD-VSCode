--- src/bootstrap.js.orig	2019-09-03 21:16:39 UTC
+++ src/bootstrap.js
@@ -261,7 +261,7 @@ exports.configurePortable = function () {
 			return process.env['VSCODE_PORTABLE'];
 		}
 
-		if (process.platform === 'win32' || process.platform === 'linux') {
+		if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 			return path.join(getApplicationPath(), 'data');
 		}
 
