--- src/vs/workbench/services/actions/common/menusExtensionPoint.ts.orig	2026-04-07 22:04:57 UTC
+++ src/vs/workbench/services/actions/common/menusExtensionPoint.ts
@@ -1252,7 +1252,10 @@ class CommandsTableRenderer extends Disposable impleme
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux':
+			case 'freebsd':
+				key = rawKeyBinding.linux;
+				break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
