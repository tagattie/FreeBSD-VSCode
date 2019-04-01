--- src/vs/base/common/platform.ts.orig	2019-03-29 14:40:10 UTC
+++ src/vs/base/common/platform.ts
@@ -8,6 +8,7 @@ const LANGUAGE_DEFAULT = 'en';
 let _isWindows = false;
 let _isMacintosh = false;
 let _isLinux = false;
+let _isFreeBSD = false;
 let _isNative = false;
 let _isWeb = false;
 let _locale: string | undefined = undefined;
@@ -51,14 +52,16 @@ if (typeof navigator === 'object' && !isElectronRender
 	const userAgent = navigator.userAgent;
 	_isWindows = userAgent.indexOf('Windows') >= 0;
 	_isMacintosh = userAgent.indexOf('Macintosh') >= 0;
-	_isLinux = userAgent.indexOf('Linux') >= 0;
+	_isLinux = userAgent.indexOf('Linux') >= 0 || userAgent.indexOf('FreeBSD') >= 0;
+	_isFreeBSD = userAgent.indexOf('FreeBSD') >= 0;
 	_isWeb = true;
 	_locale = navigator.language;
 	_language = _locale;
 } else if (typeof process === 'object') {
 	_isWindows = (process.platform === 'win32');
 	_isMacintosh = (process.platform === 'darwin');
-	_isLinux = (process.platform === 'linux');
+	_isLinux = (process.platform === 'linux' || process.platform === 'freebsd');
+	_isFreeBSD = (process.platform === 'freebsd');
 	_locale = LANGUAGE_DEFAULT;
 	_language = LANGUAGE_DEFAULT;
 	const rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
@@ -105,6 +108,7 @@ if (_isNative) {
 export const isWindows = _isWindows;
 export const isMacintosh = _isMacintosh;
 export const isLinux = _isLinux;
+export const isFreeBSD = _isFreeBSD;
 export const isNative = _isNative;
 export const isWeb = _isWeb;
 export const platform = _platform;
