--- src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts.orig	2019-07-02 17:42:48 UTC
+++ src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts
@@ -1060,7 +1060,9 @@ export class ExtensionEditor extends BaseEditor {
 
 		switch (process.platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux':
+			case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
