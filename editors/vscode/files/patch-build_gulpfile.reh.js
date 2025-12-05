--- build/gulpfile.reh.js.orig	2025-12-05 05:37:51 UTC
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
@@ -474,7 +474,7 @@ function tweakProductForServerWeb(product) {
 			gulp.task(serverTaskCI);
 
 			const serverTask = task.define(`vscode-${type}${dashed(platform)}${dashed(arch)}${dashed(minified)}`, task.series(
-				compileBuildWithManglingTask,
+				compileBuildWithoutManglingTask,
 				cleanExtensionsBuildTask,
 				compileNonNativeExtensionsBuildTask,
 				compileExtensionMediaBuildTask,
