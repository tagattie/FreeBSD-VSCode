--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2020-11-10 22:57:26 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1419,7 +1419,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
