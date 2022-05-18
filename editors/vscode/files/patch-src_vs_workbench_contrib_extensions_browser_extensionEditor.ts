--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2022-04-11 07:30:00 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1751,7 +1751,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
