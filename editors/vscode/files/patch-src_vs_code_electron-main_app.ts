--- src/vs/code/electron-main/app.ts.orig	2019-07-02 17:42:48 UTC
+++ src/vs/code/electron-main/app.ts
@@ -394,6 +394,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (process.env.SNAP && process.env.SNAP_REVISION) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 				} else {
