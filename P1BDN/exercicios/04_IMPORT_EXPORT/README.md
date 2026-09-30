# IMPORT / EXPORT

IMPORT = arquivo -> MongoDB.
EXPORT = MongoDB -> arquivo.

CSV com primeira linha contendo nomes dos campos:
`--headerline`

Import:
`--file`

Export:
`--out`

Dois workers:
`--numInsertionWorkers=2`

Filtro de export:
`--query='{"cidade":"Jahu"}'`
