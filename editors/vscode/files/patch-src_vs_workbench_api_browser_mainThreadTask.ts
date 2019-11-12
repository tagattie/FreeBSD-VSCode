--- src/vs/workbench/api/browser/mainThreadTask.ts.orig	2019-11-12 08:10:47 UTC
+++ src/vs/workbench/api/browser/mainThreadTask.ts
@@ -585,6 +585,7 @@ export class MainThreadTask implements MainThreadTaskS
 				platform = Platform.Platform.Mac;
 				break;
 			case 'linux':
+			case 'freebsd':
 				platform = Platform.Platform.Linux;
 				break;
 			default:
