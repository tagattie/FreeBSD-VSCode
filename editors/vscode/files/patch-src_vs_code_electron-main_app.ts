--- src/vs/code/electron-main/app.ts.orig	2019-06-12 07:21:13 UTC
+++ src/vs/code/electron-main/app.ts
@@ -395,6 +395,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (process.env.SNAP && process.env.SNAP_REVISION) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env.SNAP, process.env.SNAP_REVISION]));
 				} else {
