--- src/vs/base/common/platform.ts.orig	2019-05-17 20:03:55 UTC
+++ src/vs/base/common/platform.ts
@@ -51,14 +51,14 @@ if (typeof navigator === 'object' && !isElectronRender
 	const userAgent = navigator.userAgent;
 	_isWindows = userAgent.indexOf('Windows') >= 0;
 	_isMacintosh = userAgent.indexOf('Macintosh') >= 0;
-	_isLinux = userAgent.indexOf('Linux') >= 0;
+	_isLinux = userAgent.indexOf('Linux') >= 0 || userAgent.indexOf('FreeBSD') >= 0;
 	_isWeb = true;
 	_locale = navigator.language;
 	_language = _locale;
 } else if (typeof process === 'object') {
 	_isWindows = (process.platform === 'win32');
 	_isMacintosh = (process.platform === 'darwin');
-	_isLinux = (process.platform === 'linux');
+	_isLinux = (process.platform === 'linux' || process.platform === 'freebsd');
 	_locale = LANGUAGE_DEFAULT;
 	_language = LANGUAGE_DEFAULT;
 	const rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
