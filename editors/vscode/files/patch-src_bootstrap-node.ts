--- src/bootstrap-node.ts.orig	2026-07-15 00:08:44 UTC
+++ src/bootstrap-node.ts
@@ -221,7 +221,7 @@ export function configurePortable(product: Partial<IPr
 			return process.env['VSCODE_PORTABLE'];
 		}
 
-		if (process.platform === 'win32' || process.platform === 'linux') {
+		if (process.platform === 'win32' || process.platform === 'linux' || process.platform === 'freebsd') {
 			return path.join(getApplicationPath(), 'data');
 		}
 
