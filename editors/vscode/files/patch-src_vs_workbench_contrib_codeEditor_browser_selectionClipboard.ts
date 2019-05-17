--- src/vs/workbench/contrib/codeEditor/browser/selectionClipboard.ts.orig	2019-04-01 12:02:56 UTC
+++ src/vs/workbench/contrib/codeEditor/browser/selectionClipboard.ts
@@ -23,7 +23,7 @@ export class SelectionClipboard extends Disposable imp
 	constructor(editor: ICodeEditor, @IClipboardService clipboardService: IClipboardService) {
 		super();
 
-		if (platform.isLinux) {
+		if (platform.isLinux && !platform.isFreeBSD) {
 			let isEnabled = editor.getConfiguration().contribInfo.selectionClipboard;
 
 			this._register(editor.onDidChangeConfiguration((e: IConfigurationChangedEvent) => {
