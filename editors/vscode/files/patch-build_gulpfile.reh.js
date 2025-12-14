--- build/gulpfile.reh.js.orig	2025-11-25 22:06:45 UTC
+++ build/gulpfile.reh.js
@@ -26,7 +26,7 @@ const glob = require('glob');
 const File = require('vinyl');
 const fs = require('fs');
 const glob = require('glob');
-const { compileBuildWithManglingTask } = require('./gulpfile.compile');
+const { compileBuildWithoutManglingTask } = require('./gulpfile.compile');
 const { cleanExtensionsBuildTask, compileNonNativeExtensionsBuildTask, compileNativeExtensionsBuildTask, compileExtensionMediaBuildTask } = require('./gulpfile.extensions');
 const { vscodeWebResourceIncludes, createVSCodeWebFileContentMapper } = require('./gulpfile.vscode.web');
 const cp = require('child_process');
@@ -320,7 +320,7 @@ function packageTask(type, platform, arch, sourceFolde
 
 		let productJsonContents;
 		const productJsonStream = gulp.src(['product.json'], { base: '.' })
-			.pipe(json({ commit, date: readISODate('out-build'), version }))
+			.pipe(json({ commit, date: readISODate('out-build'), version, serverDownloadUrlTemplate: 'https://github.com/tagattie/FreeBSD-VSCode/releases/download/%%DISTVERSION%%/vscode-reh-${os}-${arch}-%%DISTVERSION%%.tar.gz' }))
 			.pipe(es.through(function (file) {
 				productJsonContents = file.contents.toString();
 				this.emit('data', file);
@@ -474,7 +474,7 @@ function tweakProductForServerWeb(product) {
 			gulp.task(serverTaskCI);
 
 			const serverTask = task.define(`vscode-${type}${dashed(platform)}${dashed(arch)}${dashed(minified)}`, task.series(
-				compileBuildWithManglingTask,
+				compileBuildWithoutManglingTask,
 				cleanExtensionsBuildTask,
 				compileNonNativeExtensionsBuildTask,
 				compileExtensionMediaBuildTask,
