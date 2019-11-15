--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2019-11-13 16:23:28 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1337,7 +1337,9 @@ export class ExtensionEditor extends BaseEditor {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux':
+			case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
