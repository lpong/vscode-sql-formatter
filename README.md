# Sql Formatter

Format sql files using the [sql-formatter](https://github.com/zeroturnaround/sql-formatter) npm package

Forked from https://github.com/lea21st/vscode-sql-formatter to add support for oraclesql language, created by 
Oracle's official extension.

## Install

- Open VS Code and press F1 or Ctrl + Shift + P to open command palette, select Install Extension and type `lucaslellis.vscode-sql-formatter-fork`. Or launch VS Code Quick Open (Ctrl + P), paste the following command, and press enter.

  `ext install lucaslellis.vscode-sql-formatter-fork`

## Options

```
   "sql-formatter.uppercase": false,
   "[sql]": {
       "editor.defaultFormatter": "lucaslellis.vscode-sql-formatter-fork"
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

## Package method

- Install dependencies `npm install`
- Package `npm i vsce -g`
- Package into a vsix file `vsce package`
- The `.vxix file` will be generated in the current directory and the package will be successful

  > Or download the `.vsix` file directly and install it in extensions

- The generated vsix file cannot be directly dragged into the installation, you can only install it by selecting `Install from VSIX` from the top right corner of the extensions
  ! [Installation example](/example-2.png)
  ! [Formatting effect](/example-1.jpg)
