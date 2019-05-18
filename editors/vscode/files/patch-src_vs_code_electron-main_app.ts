--- src/vs/code/electron-main/app.ts.orig	2019-05-17 20:03:55 UTC
+++ src/vs/code/electron-main/app.ts
@@ -435,7 +435,7 @@ export class CodeApplication extends Disposable {
 
 		if (process.platform === 'win32') {
 			services.set(IUpdateService, new SyncDescriptor(Win32UpdateService));
-		} else if (process.platform === 'linux') {
+		} else if (process.platform === 'linux' || process.platform === 'freebsd') {
 			if (process.env.SNAP && process.env.SNAP_REVISION) {
 				services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 			} else {
@@ -784,7 +784,6 @@ export class CodeApplication extends Disposable {
 		});
 	}
 }
-
 function getURIToOpenFromPathSync(path: string): IURIToOpen {
 	try {
 		const fileStat = statSync(path);
