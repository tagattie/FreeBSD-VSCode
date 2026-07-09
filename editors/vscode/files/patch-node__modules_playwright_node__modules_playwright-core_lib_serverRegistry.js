--- node_modules/playwright/node_modules/playwright-core/lib/serverRegistry.js.orig	2026-07-09 12:37:40 UTC
+++ node_modules/playwright/node_modules/playwright-core/lib/serverRegistry.js
@@ -7277,7 +7277,7 @@ var defaultCacheDirectory = (() => {
   });
 }
 var defaultCacheDirectory = (() => {
-  if (process.platform === "linux")
+  if (process.platform === "linux" || process.platform === "freebsd")
     return process.env.XDG_CACHE_HOME || import_path2.default.join(import_os.default.homedir(), ".cache");
   if (process.platform === "darwin")
     return import_path2.default.join(import_os.default.homedir(), "Library", "Caches");
