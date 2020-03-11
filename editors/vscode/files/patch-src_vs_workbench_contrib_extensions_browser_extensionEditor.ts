--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2020-03-09 13:51:53 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1367,7 +1367,8 @@ export class ExtensionEditor extends BaseEditor {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
