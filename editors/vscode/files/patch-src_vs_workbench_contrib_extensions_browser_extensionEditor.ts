--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2022-11-09 00:04:34 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1719,7 +1719,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
