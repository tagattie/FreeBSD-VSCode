--- src/vs/code/electron-main/app.ts.orig	2021-10-19 14:41:40 UTC
+++ src/vs/code/electron-main/app.ts
@@ -461,7 +461,7 @@ export class CodeApplication extends Disposable {
 				services.set(IUpdateService, new SyncDescriptor(Win32UpdateService));
 				break;
 
-			case 'linux':
+			case 'linux': case 'freebsd':
 				if (isLinuxSnap) {
 					services.set(IUpdateService, new SyncDescriptor(SnapUpdateService, [process.env['SNAP'], process.env['SNAP_REVISION']]));
 				} else {
