--- build/gulpfile.extensions.js.orig	2019-11-12 08:57:23 UTC
+++ build/gulpfile.extensions.js
@@ -159,7 +159,7 @@ const cleanExtensionsBuildTask = task.define('clean-ex
 const compileExtensionsBuildTask = task.define('compile-extensions-build', task.series(
 	cleanExtensionsBuildTask,
 	task.define('bundle-extensions-build', () => ext.packageLocalExtensionsStream().pipe(gulp.dest('.build'))),
-	task.define('bundle-marketplace-extensions-build', () => ext.packageMarketplaceExtensionsStream().pipe(gulp.dest('.build'))),
+//	task.define('bundle-marketplace-extensions-build', () => ext.packageMarketplaceExtensionsStream().pipe(gulp.dest('.build'))),
 ));
 
 gulp.task(compileExtensionsBuildTask);
