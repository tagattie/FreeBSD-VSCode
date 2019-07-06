--- build/npm/postinstall.js.orig	2019-07-02 17:42:48 UTC
+++ build/npm/postinstall.js
@@ -20,7 +20,8 @@ function yarnInstall(location, opts) {
 	const raw = process.env['npm_config_argv'] || '{}';
 	const argv = JSON.parse(raw);
 	const original = argv.original || [];
-	const args = original.filter(arg => arg === '--ignore-optional' || arg === '--frozen-lockfile');
+	const passargs = ['--ignore-optional', '--frozen-lockfile', '--offline', '--no-progress', '--verbose'];
+	const args = original.filter(arg => passargs.includes(arg));
 
 	console.log(`Installing dependencies in ${location}...`);
 	console.log(`$ yarn ${args.join(' ')}`);
@@ -68,7 +69,7 @@ runtime "${runtime}"`;
 }
 
 yarnInstall(`build`); // node modules required for build
-yarnInstall('test/smoke'); // node modules required for smoketest
+// yarnInstall('test/smoke'); // node modules required for smoketest
 yarnInstallBuildDependencies(); // node modules for watching, specific to host node version, not electron
 
 // Remove the windows process tree typings as this causes duplicate identifier errors in tsc builds
@@ -76,4 +77,4 @@ const processTreeDts = path.join('node_modules', 'wind
 if (fs.existsSync(processTreeDts)) {
 	console.log('Removing windows-process-tree.d.ts');
 	fs.unlinkSync(processTreeDts);
-}
\ No newline at end of file
+}
