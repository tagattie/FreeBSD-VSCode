--- src/bootstrap.js.orig	2020-07-21 14:27:11 UTC
+++ src/bootstrap.js
@@ -198,7 +198,7 @@
 				return process.env['VSCODE_PORTABLE'];
 			}
 
-			if (process.platform === 'win32' || process.platform === 'linux') {
+			if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 				return path.join(getApplicationPath(), 'data');
 			}
 
