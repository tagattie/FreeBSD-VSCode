--- build/lib/electron.ts.orig	2026-07-07 22:14:24 UTC
+++ build/lib/electron.ts
@@ -239,10 +239,11 @@ export const config = {
 	winIcon: 'resources/win32/code.ico',
 	token: process.env['GITHUB_TOKEN'],
 	repo: electronAssetResolver,
-	validateChecksum: true,
+	validateChecksum: false,
 	checksumFile: path.join(root, 'build', 'checksums', 'electron.txt'),
 	createVersionedResources: useVersionedUpdate,
 	productVersionString: versionedResourcesFolder,
+	unsafelyDisableChecksums: true,
 };
 
 function getElectron(arch: string): () => NodeJS.ReadWriteStream {
