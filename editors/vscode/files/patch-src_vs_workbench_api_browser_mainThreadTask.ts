--- src/vs/workbench/api/browser/mainThreadTask.ts.orig	2020-07-21 14:27:11 UTC
+++ src/vs/workbench/api/browser/mainThreadTask.ts
@@ -620,7 +620,7 @@ export class MainThreadTask implements MainThreadTaskS
 			case 'darwin':
 				platform = Platform.Platform.Mac;
 				break;
-			case 'linux':
+			case 'linux': case 'freebsd':
 				platform = Platform.Platform.Linux;
 				break;
 			default:
