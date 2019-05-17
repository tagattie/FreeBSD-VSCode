--- src/vs/code/electron-main/app.ts.orig	2019-03-29 14:40:10 UTC
+++ src/vs/code/electron-main/app.ts
@@ -426,7 +426,7 @@ export class CodeApplication extends Disposable {
 
 		if (process.platform === 'win32') {
 			services.set(IUpdateService, new SyncDescriptor(Win32UpdateService));
-		} else if (process.platform === 'linux') {
+		} else if (process.platform === 'linux' || process.platform === 'freebsd') {
 			if (process.env.SNAP && process.env.SNAP_REVISION) {
 				services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 			} else {
@@ -775,4 +775,3 @@ export class CodeApplication extends Disposable {
 		});
 	}
 }
-
