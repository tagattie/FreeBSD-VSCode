--- src/main.js.orig	2021-08-18 23:34:31 UTC
+++ src/main.js
@@ -163,7 +163,7 @@ function configureCommandlineSwitchesSync(cliArgs) {
 		'force-color-profile'
 	];
 
-	if (process.platform === 'linux') {
+	if (process.platform === 'linux' || process.platform === 'freebsd') {
 
 		// Force enable screen readers on Linux via this flag
 		SUPPORTED_ELECTRON_SWITCHES.push('force-renderer-accessibility');
@@ -428,7 +428,7 @@ function configureCrashReporter() {
 			companyName: companyName,
 			productName: productName,
 			submitURL,
-			uploadToServer: !crashReporterDirectory,
+			uploadToServer: false, // always disable crash reporter upload
 			compress: true
 		});
 	}
