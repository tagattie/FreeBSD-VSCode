--- src/vs/workbench/contrib/extensions/browser/extensionEditor.ts.orig	2021-08-18 23:34:31 UTC
+++ src/vs/workbench/contrib/extensions/browser/extensionEditor.ts
@@ -1539,7 +1539,8 @@ export class ExtensionEditor extends EditorPane {
 
 		switch (platform) {
 			case 'win32': key = rawKeyBinding.win; break;
-			case 'linux': key = rawKeyBinding.linux; break;
+			case 'linux': case 'freebsd':
+				key = rawKeyBinding.linux; break;
 			case 'darwin': key = rawKeyBinding.mac; break;
 		}
 
