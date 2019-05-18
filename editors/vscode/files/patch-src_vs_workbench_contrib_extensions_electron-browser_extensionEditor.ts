--- src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts.orig	2019-05-17 20:03:55 UTC
+++ src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts
@@ -1132,6 +1132,7 @@ export class ExtensionEditor extends BaseEditor {
 		switch (process.platform) {
 			case 'win32': key = rawKeyBinding.win; break;
 			case 'linux': key = rawKeyBinding.linux; break;
+			case 'freebsd': key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
