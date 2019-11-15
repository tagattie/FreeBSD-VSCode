--- src/vs/workbench/api/browser/mainThreadTask.ts.orig	2019-11-13 16:23:28 UTC
+++ src/vs/workbench/api/browser/mainThreadTask.ts
@@ -589,6 +589,7 @@ export class MainThreadTask implements MainThreadTaskS
 				platform = Platform.Platform.Mac;
 				break;
 			case 'linux':
+			case 'freebsd':
 				platform = Platform.Platform.Linux;
 				break;
 			default:
