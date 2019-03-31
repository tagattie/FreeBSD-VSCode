--- src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts.orig	2019-03-20 08:48:14 UTC
+++ src/vs/workbench/contrib/extensions/electron-browser/extensionEditor.ts
@@ -1124,6 +1124,7 @@ export class ExtensionEditor extends BaseEditor {
 		switch (process.platform) {
 			case 'win32': key = rawKeyBinding.win; break;
 			case 'linux': key = rawKeyBinding.linux; break;
+			case 'freebsd': key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
