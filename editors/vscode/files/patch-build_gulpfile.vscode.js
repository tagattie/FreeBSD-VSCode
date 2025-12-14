--- build/gulpfile.vscode.js.orig	2025-12-14 01:36:08 UTC
+++ build/gulpfile.vscode.js
@@ -270,7 +270,7 @@ function packageTask(platform, arch, sourceFolderName,
 
 		let productJsonContents;
 		const productJsonStream = gulp.src(['product.json'], { base: '.' })
-			.pipe(json({ commit, date: readISODate('out-build'), checksums, version }))
+			.pipe(json({ commit, date: readISODate('out-build'), checksums, version, serverDownloadUrlTemplate: 'https://github.com/tagattie/FreeBSD-VSCode/releases/download/%%DISTVERSION%%/vscode-reh-${os}-${arch}-%%DISTVERSION%%.tar.gz' }))
 			.pipe(es.through(function (file) {
 				productJsonContents = file.contents.toString();
 				this.emit('data', file);
