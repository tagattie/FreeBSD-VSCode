--- resources/linux/bin/code.sh.orig	2019-05-24 12:35:43 UTC
+++ resources/linux/bin/code.sh
@@ -4,7 +4,7 @@
 # Licensed under the MIT License. See License.txt in the project root for license information.
 
 # test that VSCode wasn't installed inside WSL
-if grep -qi Microsoft /proc/version; then
+if grep -qi Microsoft /proc/version 2> /dev/null; then
 	echo "To use VS Code with the Windows Subsystem for Linux, please install VS Code in Windows and uninstall the Linux version in WSL. You can then use the '@@PRODNAME@@' command in a WSL terminal just as you would in a normal command prompt." 1>&2
 	read -e -p "Do you want to continue anyways ? [y/N] " YN
 
