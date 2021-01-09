--- build/gulpfile.extensions.js.orig	2020-07-21 14:27:11 UTC
+++ build/gulpfile.extensions.js
@@ -166,7 +166,7 @@ const cleanExtensionsBuildTask = task.define('clean-ex
 const compileExtensionsBuildTask = task.define('compile-extensions-build', task.series(
 	cleanExtensionsBuildTask,
 	task.define('bundle-extensions-build', () => ext.packageLocalExtensionsStream().pipe(gulp.dest('.build'))),
-	task.define('bundle-marketplace-extensions-build', () => ext.packageMarketplaceExtensionsStream().pipe(gulp.dest('.build'))),
+//	task.define('bundle-marketplace-extensions-build', () => ext.packageMarketplaceExtensionsStream().pipe(gulp.dest('.build'))),
 ));
 
 gulp.task(compileExtensionsBuildTask);
