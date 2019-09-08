--- src/vs/code/electron-main/app.ts.orig	2019-09-03 21:16:39 UTC
+++ src/vs/code/electron-main/app.ts
@@ -437,6 +437,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (process.env.SNAP && process.env.SNAP_REVISION) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 				} else {
