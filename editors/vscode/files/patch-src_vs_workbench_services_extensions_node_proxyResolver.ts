--- src/vs/workbench/services/extensions/node/proxyResolver.ts.orig	2020-10-02 16:06:59 UTC
+++ src/vs/workbench/services/extensions/node/proxyResolver.ts
@@ -486,7 +486,7 @@ async function readCaCertificates() {
 	if (process.platform === 'darwin') {
 		return readMacCaCertificates();
 	}
-	if (process.platform === 'linux') {
+	if (process.platform === 'linux' || process.platform === 'freebsd') {
 		return readLinuxCaCertificates();
 	}
 	return undefined;
@@ -534,6 +534,8 @@ async function readMacCaCertificates() {
 const linuxCaCertificatePaths = [
 	'/etc/ssl/certs/ca-certificates.crt',
 	'/etc/ssl/certs/ca-bundle.crt',
+	'/etc/ssl/cert.pem',
+	'/usr/local/share/certs/ca-root-nss.crt',
 ];
 
 async function readLinuxCaCertificates() {
