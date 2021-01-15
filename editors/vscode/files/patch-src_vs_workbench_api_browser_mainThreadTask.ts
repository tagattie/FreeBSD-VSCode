--- src/vs/workbench/api/browser/mainThreadTask.ts.orig	2020-10-02 16:06:59 UTC
+++ src/vs/workbench/api/browser/mainThreadTask.ts
@@ -646,7 +646,7 @@ export class MainThreadTask implements MainThreadTaskS
 			case 'darwin':
 				platform = Platform.Platform.Mac;
 				break;
-			case 'linux':
+			case 'linux': case 'freebsd':
 				platform = Platform.Platform.Linux;
 				break;
 			default:
