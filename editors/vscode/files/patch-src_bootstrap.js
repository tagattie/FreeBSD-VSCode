--- src/bootstrap.js.orig	2020-10-13 14:05:48 UTC
+++ src/bootstrap.js
@@ -208,7 +208,7 @@
 				return process.env['VSCODE_PORTABLE'];
 			}
 
-			if (process.platform === 'win32' || process.platform === 'linux') {
+			if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 				return path.join(getApplicationPath(), 'data');
 			}
 
