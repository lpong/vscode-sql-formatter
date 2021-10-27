"use strict";
const format = require("sql-formatter");
const vscode = require("vscode");

const getSetting = (group, key, def) => {
  const settings = vscode.workspace.getConfiguration(group, null);
  const editor = vscode.window.activeTextEditor;
  const language = editor && editor.document && editor.document.languageId;
  const languageSettings =
    language &&
    vscode.workspace.getConfiguration(null, null).get(`[${language}]`);

  let value = languageSettings && languageSettings[`${group}.${key}`];
  if (value == null) value = settings.get(key, def);
  return value == null ? def : value;
};

const getConfig = ({ insertSpaces, tabSize }) => ({
  indent: insertSpaces ? " ".repeat(tabSize) : "\t",
  language: getSetting("sql-formatter", "dialect", "sql"),
  uppercase: getSetting("sql-formatter", "uppercase", false),
  linesBetweenQueries: getSetting("sql-formatter", "linesBetweenQueries", 2),
});

module.exports.activate = () =>
  vscode.languages.registerDocumentRangeFormattingEditProvider("sql", {
    provideDocumentRangeFormattingEdits: (document, range, options) => [
      vscode.TextEdit.replace(
        range,
        format.format(document.getText(range), getConfig(options))
      ),
    ],
  });
