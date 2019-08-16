--- src/vs/code/electron-main/app.ts.orig	2019-08-08 00:55:19 UTC
+++ src/vs/code/electron-main/app.ts
@@ -444,6 +444,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (process.env.SNAP && process.env.SNAP_REVISION) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 				} else {
