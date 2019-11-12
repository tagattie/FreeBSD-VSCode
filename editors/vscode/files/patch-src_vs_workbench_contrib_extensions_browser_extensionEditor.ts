--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2019-11-12 08:12:33 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1312,7 +1312,9 @@ export class ExtensionEditor extends BaseEditor {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux':
+			case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
