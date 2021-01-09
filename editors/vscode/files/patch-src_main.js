--- src/main.js.orig	2020-07-21 14:27:11 UTC
+++ src/main.js
@@ -198,7 +198,7 @@ function configureCommandlineSwitchesSync(cliArgs) {
 		'force-color-profile'
 	];
 
-	if (process.platform === 'linux') {
+	if (process.platform === 'linux' || process.platform === 'freebsd') {
 		SUPPORTED_ELECTRON_SWITCHES.push('force-renderer-accessibility');
 	}
 
