--- build/npm/postinstall.js.orig	2019-03-20 08:48:14 UTC
+++ build/npm/postinstall.js
@@ -69,7 +69,7 @@ runtime "${runtime}"`;
 }
 
 yarnInstall(`build`); // node modules required for build
-yarnInstall('test/smoke'); // node modules required for smoketest
+// yarnInstall('test/smoke'); // node modules required for smoketest
 yarnInstallBuildDependencies(); // node modules for watching, specific to host node version, not electron
 
 // Remove the windows process tree typings as this causes duplicate identifier errors in tsc builds
@@ -77,4 +77,4 @@ const processTreeDts = path.join('node_modules', 'wind
 if (fs.existsSync(processTreeDts)) {
 	console.log('Removing windows-process-tree.d.ts');
 	fs.unlinkSync(processTreeDts);
-}
\ No newline at end of file
+}
