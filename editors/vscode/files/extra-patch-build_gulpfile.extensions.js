--- build/gulpfile.extensions.js.orig	2019-08-10 10:30:01 UTC
+++ build/gulpfile.extensions.js
@@ -156,8 +156,8 @@ const cleanExtensionsBuildTask = task.define('clean-ex
 const compileExtensionsBuildTask = task.define('compile-extensions-build', task.series(
 	cleanExtensionsBuildTask,
 	task.define('bundle-extensions-build', () => ext.packageLocalExtensionsStream().pipe(gulp.dest('.build'))),
-	task.define('bundle-marketplace-extensions-build', () => ext.packageMarketplaceExtensionsStream().pipe(gulp.dest('.build'))),
+//	task.define('bundle-marketplace-extensions-build', () => ext.packageMarketplaceExtensionsStream().pipe(gulp.dest('.build'))),
 ));
 
 gulp.task(compileExtensionsBuildTask);
-exports.compileExtensionsBuildTask = compileExtensionsBuildTask;
\ No newline at end of file
+exports.compileExtensionsBuildTask = compileExtensionsBuildTask;
