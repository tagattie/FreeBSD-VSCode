--- src/vs/workbench/services/extensions/node/proxyResolver.ts.orig	2019-09-03 21:16:39 UTC
+++ src/vs/workbench/services/extensions/node/proxyResolver.ts
@@ -462,7 +462,7 @@ async function readCaCertificates() {
 	if (process.platform === 'darwin') {
 		return readMacCaCertificates();
 	}
-	if (process.platform === 'linux') {
+	if (process.platform === 'linux' || process.platform === 'freebsd') {
 		return readLinuxCaCertificates();
 	}
 	return undefined;
@@ -511,6 +511,8 @@ async function readMacCaCertificates() {
 const linuxCaCertificatePaths = [
 	'/etc/ssl/certs/ca-certificates.crt',
 	'/etc/ssl/certs/ca-bundle.crt',
+	'/etc/ssl/cert.pem',
+	'/usr/local/share/certs/ca-root-nss.crt',
 ];
 
 async function readLinuxCaCertificates() {
