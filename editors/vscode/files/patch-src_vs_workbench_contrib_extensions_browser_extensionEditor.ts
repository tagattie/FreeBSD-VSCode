--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2020-10-13 14:05:48 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1415,7 +1415,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
