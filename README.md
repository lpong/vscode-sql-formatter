# Sql Formatter

SQL格式化工具使用 [sql-formatter](https://github.com/zeroturnaround/sql-formatter) npm包.在这个包上进行了优化，以支持hive,后续会对hive进行大量的支持

## 打包方法
 - 安装依赖 `npm install`
 - 打包 `npm i vsce -g`
 - 打包成vsix文件 `vsce package`
 - 当前目录会生成`.vxix文件`，打包成功
 > 或者直接下载`.vsix`文件，在extensions中安装

## 安装方法
 - 生成好的vsix文件不能直接拖入安装，只能从扩展的右上角选择`Install from VSIX`安装
 ![安装示例](/example-2.png)
 ![格式化效果图](/example-1.jpg)
 

## 配置方法
 ```
    "sql-formatter.uppercase": true,
    "[sql]": {
        "editor.defaultFormatter": "lea21st.vscode-sql-formatter"
    }
 ```

## Configuration

**`sql-formatter.dialect`**: Changes which dialect to format with (`sql`: Standard SQL, `n1ql`: Couchbase N1QL, `db2`: IBM DB2, `pl/sql`: Oracle PL/SQL). Defaults to `sql`.

**`sql-formatter.uppercase`**: Convert keywords to uppercase. Defaults to false.

**`sql-formatter.linesBetweenQueries`**: Number of linebreaks between queries. Defaults to 2.
