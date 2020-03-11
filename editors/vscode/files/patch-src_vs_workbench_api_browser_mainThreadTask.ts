--- src/vs/workbench/api/browser/mainThreadTask.ts.orig	2020-03-09 13:51:53 UTC
+++ src/vs/workbench/api/browser/mainThreadTask.ts
@@ -593,7 +593,7 @@ export class MainThreadTask implements MainThreadTaskS
 			case 'darwin':
 				platform = Platform.Platform.Mac;
 				break;
-			case 'linux':
+			case 'linux': case 'freebsd':
 				platform = Platform.Platform.Linux;
 				break;
 			default:
