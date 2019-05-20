--- src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts.orig	2019-05-17 20:03:55 UTC
+++ src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts
@@ -1131,7 +1131,9 @@ export class ExtensionEditor extends BaseEditor {
 
 		switch (process.platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux':
+			case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
