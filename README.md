# Sql Formatter

SQL 格式化工具使用 [sql-formatter](https://github.com/zeroturnaround/sql-formatter)

## 打包方法

- 安装依赖 `npm install`
- 打包 `npm i vsce -g`
- 打包成 vsix 文件 `vsce package`
- 当前目录会生成`.vxix文件`，打包成功
  > 或者直接下载`.vsix`文件，在 extensions 中安装

## 安装方法

- 生成好的 vsix 文件不能直接拖入安装，只能从扩展的右上角选择`Install from VSIX`安装
  ![安装示例](/example-2.png)
  ![格式化效果图](/example-1.jpg)

## 配置方法

```
   "sql-formatter.uppercase": false,
   "[sql]": {
       "editor.defaultFormatter": "lea21st.vscode-sql-formatter"
   }
```

## SQL formatter supports the following dialects:

- **sql** - [Standard SQL][]
- **mariadb** - [MariaDB][]
- **mysql** - [MySQL][]
- **postgresql** - [PostgreSQL][]
- **db2** - [IBM DB2][]
- **plsql** - [Oracle PL/SQL][]
- **n1ql** - [Couchbase N1QL][]
- **redshift** - [Amazon Redshift][]
- **spark** - [Spark][]
- **tsql** - [SQL Server Transact-SQL][tsql]


## Configuration

**`sql-formatter.dialect`**: Defaults to "sql" (see the above list of supported dialects)

**`sql-formatter.uppercase`**: Defaults to false (not safe to use when SQL dialect has case-sensitive identifiers)

**`sql-formatter.linesBetweenQueries`**: Number of linebreaks between queries. Defaults to 2.
