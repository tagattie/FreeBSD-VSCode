--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2021-10-19 14:41:40 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1559,7 +1559,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
