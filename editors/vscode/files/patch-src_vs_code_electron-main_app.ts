--- src/vs/code/electron-main/app.ts.orig	2026-03-24 14:07:18 UTC
+++ src/vs/code/electron-main/app.ts
@@ -1058,6 +1058,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (isLinuxSnap) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env['SNAP'], process.env['SNAP_REVISION']]));
 				} else {
