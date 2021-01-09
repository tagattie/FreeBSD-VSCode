--- build/gulpfile.vscode.js.orig	2020-07-21 14:27:11 UTC
+++ build/gulpfile.vscode.js
@@ -273,7 +273,7 @@ function packageTask(platform, arch, sourceFolderName,
 		let result = all
 			.pipe(util.skipDirectories())
 			.pipe(util.fixWin32DirectoryPermissions())
-			.pipe(electron(_.extend({}, config, { platform, arch, ffmpegChromium: true })))
+			.pipe(electron(_.extend({}, config, { platform, arch, ffmpegChromium: false })))
 			.pipe(filter(['**', '!LICENSE', '!LICENSES.chromium.html', '!version'], { dot: true }));
 
 		if (platform === 'linux') {
