--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2020-10-02 16:06:59 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1424,7 +1424,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
