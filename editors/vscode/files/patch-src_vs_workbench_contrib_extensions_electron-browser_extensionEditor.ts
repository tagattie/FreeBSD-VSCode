--- src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts.orig	2019-06-08 04:51:50 UTC
+++ src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts
@@ -1055,7 +1055,9 @@ export class ExtensionEditor extends BaseEditor {
 
 		switch (process.platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux':
+			case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
