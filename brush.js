SyntaxHighlighter.brushes.MSSQL = function() {
  var funcs = 'abs avg case cast coalesce convert count current_timestamp ' +
    'current_user dateadd datediff day getdate isnull left lower month nullif replace right ' +
    'session_user space substring sum system_user upper user year ';

  var keywords = 'absolute action add after alter asc at authorization begin bigint ' +
    'binary bit by cascade char character check checkpoint close collate ' +
    'column commit committed connect connection constraint contains continue ' +
    'create cube current current_date current_time cursor database date ' +
    'deallocate dec decimal declare default delete desc distinct double drop ' +
    'dynamic else end end-exec escape except exec execute false fetch first ' +
    'float for force foreign forward free from full function global goto grant ' +
    'group grouping having hour ignore index inner insensitive insert instead ' +
    'int integer intersect into is isolation key last level load local max min ' +
    'minute modify move name national nchar next no numeric of off only ' +
    'open option order out output partial password precision prepare primary ' +
    'prior privileges procedure public read real references relative repeatable ' +
    'restrict return returns revoke rollback rollup rows rule schema scroll ' +
    'second section select sequence serializable set size smallint static ' +
    'statistics table temp temporary then time timestamp to top transaction ' +
    'translation trigger true truncate uncommitted union unique update values ' +
    'varchar varying view when where with work failover availability while replica use ' +
	'waitfor delay go if ';

  var operators = 'all and any apply as between cross in inner join left like not natural null on or outer right some ';

  this.regexList = [
    {
      regex: /--(.*)$/gm,
      css: 'comments'
    },
    {
      regex: /\/\*([^\*][\s\S]*?)?\*\//gm,
      css: 'comments'
    },
    {
      regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,
      css: 'string'
    },
    {
      regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,
      css: 'string'
    },
    {
      regex: new RegExp(this.getKeywords(funcs), 'gmi'),
      css: 'color2'
    },
    {
      regex: new RegExp(this.getKeywords(operators), 'gmi'),
      css: 'color1'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gmi'),
      css: 'keyword'
    },
	{
      regex: /@([\-a-zA-Z0-9_]*)/gm,
      css: 'variable'
    },
	{
      regex: /\$\(([\-a-zA-Z0-9_]*\))/gm,
      css: 'variable'
    },
	{
      regex: /@@([\-a-zA-Z0-9_]*)/gm,
      css: 'constants'
    },
	{
      regex: /:([\-a-zA-Z0-9_]*)/gm,
      css: 'preprocessor'
    }
	]
	;
};


SyntaxHighlighter.brushes.MSSQL.prototype    = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.MSSQL.aliases  = ['sqlserver','tsql', 'mssql'];
