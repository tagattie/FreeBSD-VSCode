--- build/lib/extensions.ts.orig	2019-05-17 20:03:55 UTC
+++ build/lib/extensions.ts
@@ -279,16 +279,16 @@ export function packageExtensionsStream(optsIn?: IPack
 
 	const localExtensionDependencies = () => gulp.src('extensions/node_modules/**', { base: '.' });
 
-	const marketplaceExtensions = () => es.merge(
-		...builtInExtensions
-			.filter(({ name }) => opts.desiredExtensions ? opts.desiredExtensions.indexOf(name) >= 0 : true)
-			.map(extension => {
-				return fromMarketplace(extension.name, extension.version, extension.metadata)
-					.pipe(rename(p => p.dirname = `extensions/${extension.name}/${p.dirname}`));
-			})
-	);
+	// const marketplaceExtensions = () => es.merge(
+	// 	...builtInExtensions
+	// 		.filter(({ name }) => opts.desiredExtensions ? opts.desiredExtensions.indexOf(name) >= 0 : true)
+	// 		.map(extension => {
+	// 			return fromMarketplace(extension.name, extension.version, extension.metadata)
+	// 				.pipe(rename(p => p.dirname = `extensions/${extension.name}/${p.dirname}`));
+	// 		})
+	// );
 
-	return sequence([localExtensions, localExtensionDependencies, marketplaceExtensions])
+	return sequence([localExtensions, localExtensionDependencies])
 		.pipe(util2.setExecutableBit(['**/*.sh']))
 		.pipe(filter(['**', '!**/*.js.map']));
 }
