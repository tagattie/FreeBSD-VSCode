--- build/npm/postinstall.js.orig	2019-05-17 20:03:55 UTC
+++ build/npm/postinstall.js
@@ -26,6 +26,13 @@ function yarnInstall(location, opts) {
 		args.push('--ignore-optional');
 	}
 
+	const addargs = ['--frozen-lockfile', '--offline', '--no-progress', '--verbose'];
+	addargs.forEach(arg => {
+		if (original.indexOf(arg) > -1) {
+			args.push(arg)
+		}
+	});
+
 	console.log('Installing dependencies in \'%s\'.', location);
 	const result = cp.spawnSync(yarn, args, opts);
 
@@ -77,4 +84,4 @@ const processTreeDts = path.join('node_modules', 'wind
 if (fs.existsSync(processTreeDts)) {
 	console.log('Removing windows-process-tree.d.ts');
 	fs.unlinkSync(processTreeDts);
-}
\ No newline at end of file
+}
