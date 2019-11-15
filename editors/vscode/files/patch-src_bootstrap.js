--- src/bootstrap.js.orig	2019-11-13 16:23:28 UTC
+++ src/bootstrap.js
@@ -263,7 +263,7 @@ exports.configurePortable = function () {
 			return process.env['VSCODE_PORTABLE'];
 		}
 
-		if (process.platform === 'win32' || process.platform === 'linux') {
+		if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 			return path.join(getApplicationPath(), 'data');
 		}
 
