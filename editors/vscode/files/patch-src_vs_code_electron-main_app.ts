--- src/vs/code/electron-main/app.ts.orig	2019-10-15 15:03:50 UTC
+++ src/vs/code/electron-main/app.ts
@@ -438,6 +438,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (process.env.SNAP && process.env.SNAP_REVISION) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 				} else {
