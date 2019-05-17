--- scripts/code.sh.orig	2019-03-20 08:48:14 UTC
+++ scripts/code.sh
@@ -19,14 +19,11 @@ function code() {
 		CODE="./.build/electron/$NAME.app/Contents/MacOS/Electron"
 	else
 		NAME=`node -p "require('./product.json').applicationName"`
-		CODE=".build/electron/$NAME"
+		CODE="electron"
 	fi
 
 	# Node modules
 	test -d node_modules || yarn
-
-	# Get electron
-	node build/lib/electron.js || ./node_modules/.bin/gulp electron
 
 	# Manage built-in extensions
 	if [[ "$1" == "--builtin" ]]; then
