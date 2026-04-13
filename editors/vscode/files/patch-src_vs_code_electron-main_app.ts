--- src/vs/code/electron-main/app.ts.orig	2026-04-07 22:04:57 UTC
+++ src/vs/code/electron-main/app.ts
@@ -1056,6 +1056,7 @@ export class CodeApplication extends Disposable {
 				break;
 
 			case 'linux':
+			case 'freebsd':
 				if (isLinuxSnap) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env['SNAP'], process.env['SNAP_REVISION']]));
 				} else {
