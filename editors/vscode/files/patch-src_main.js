--- src/main.js.orig	2022-10-12 10:08:52 UTC
+++ src/main.js
@@ -159,7 +159,7 @@ function configureCommandlineSwitchesSync(cliArgs) {
 		'force-color-profile'
 	];
 
-	if (process.platform === 'linux') {
+	if (process.platform === 'linux' || process.platform === 'freebsd') {
 
 		// Force enable screen readers on Linux via this flag
 		SUPPORTED_ELECTRON_SWITCHES.push('force-renderer-accessibility');
