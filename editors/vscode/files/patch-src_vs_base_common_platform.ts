--- src/vs/base/common/platform.ts.orig	2020-10-13 14:05:48 UTC
+++ src/vs/base/common/platform.ts
@@ -27,7 +27,7 @@ export interface IProcessEnvironment {
 }
 
 export interface INodeProcess {
-	platform: 'win32' | 'linux' | 'darwin';
+	platform: 'win32' | 'linux' | 'darwin' | 'freebsd';
 	env: IProcessEnvironment;
 	nextTick: Function;
 	versions?: {
@@ -67,7 +67,7 @@ if (typeof navigator === 'object' && !isElectronRender
 	_isWindows = _userAgent.indexOf('Windows') >= 0;
 	_isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
 	_isIOS = (_userAgent.indexOf('Macintosh') >= 0 || _userAgent.indexOf('iPad') >= 0 || _userAgent.indexOf('iPhone') >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
-	_isLinux = _userAgent.indexOf('Linux') >= 0;
+	_isLinux = (_userAgent.indexOf('Linux') >= 0 || _userAgent.indexOf('FreeBSD') >= 0);
 	_isWeb = true;
 	_locale = navigator.language;
 	_language = _locale;
@@ -77,7 +77,7 @@ if (typeof navigator === 'object' && !isElectronRender
 else if (typeof nodeProcess === 'object') {
 	_isWindows = (nodeProcess.platform === 'win32');
 	_isMacintosh = (nodeProcess.platform === 'darwin');
-	_isLinux = (nodeProcess.platform === 'linux');
+	_isLinux = (nodeProcess.platform === 'linux' || nodeProcess.platform === 'freebsd');
 	_locale = LANGUAGE_DEFAULT;
 	_language = LANGUAGE_DEFAULT;
 	const rawNlsConfig = nodeProcess.env['VSCODE_NLS_CONFIG'];
