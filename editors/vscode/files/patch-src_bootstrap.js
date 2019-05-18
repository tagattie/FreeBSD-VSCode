--- src/bootstrap.js.orig	2019-05-17 20:03:55 UTC
+++ src/bootstrap.js
@@ -261,7 +261,7 @@ exports.configurePortable = function () {
 			return process.env['VSCODE_PORTABLE'];
 		}
 
-		if (process.platform === 'win32' || process.platform === 'linux') {
+		if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 			return path.join(getApplicationPath(), 'data');
 		}
 
@@ -301,4 +301,4 @@ exports.avoidMonkeyPatchFromAppInsights = function () 
 	process.env['APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL'] = true; // Skip monkey patching of 3rd party modules by appinsights
 	global['diagnosticsSource'] = {}; // Prevents diagnostic channel (which patches "require") from initializing entirely
 };
-//#endregion
\ No newline at end of file
+//#endregion
