--- src/vs/code/electron-main/app.ts.orig	2026-09-03 05:06:41 UTC
+++ src/vs/code/electron-main/app.ts
@@ -1186,6 +1186,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (isLinuxSnap) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env['SNAP'], process.env['SNAP_REVISION']]));
 				} else {
