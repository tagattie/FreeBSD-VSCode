--- src/paths.js.orig	2019-03-20 08:48:14 UTC
+++ src/paths.js
@@ -20,6 +20,7 @@ function getAppDataPath(platform) {
 		case 'win32': return process.env['VSCODE_APPDATA'] || process.env['APPDATA'] || path.join(process.env['USERPROFILE'], 'AppData', 'Roaming');
 		case 'darwin': return process.env['VSCODE_APPDATA'] || path.join(os.homedir(), 'Library', 'Application Support');
 		case 'linux': return process.env['VSCODE_APPDATA'] || process.env['XDG_CONFIG_HOME'] || path.join(os.homedir(), '.config');
+		case 'freebsd': return process.env['VSCODE_APPDATA'] || process.env['XDG_CONFIG_HOME'] || path.join(os.homedir(), '.config');
 		default: throw new Error('Platform not supported');
 	}
 }
@@ -33,4 +34,4 @@ function getDefaultUserDataPath(platform) {
 }
 
 exports.getAppDataPath = getAppDataPath;
-exports.getDefaultUserDataPath = getDefaultUserDataPath;
\ No newline at end of file
+exports.getDefaultUserDataPath = getDefaultUserDataPath;
