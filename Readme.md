it is very basic lib which displays truncated  string if it exeeds the specified limit or else the old string

options
string       string      the complete string which is to be truncate

truncate-after  integer   number of characters after which string is to be truncate default 30 char

toggle        	boolean		enable show more show/less on the old/truncated string default false

usage

include jbTruncate.js in your index file
<script src=".../jbTruncate.js"></script>

add 'jb' module dependency in your app.js file

<jb-truncate string="TODAYS WORK TO DO 10/june/2016--11/june PROFILE PAGE
" truncate-after="20" ></jb-truncate>

<jb-truncate string="TODAYS WORK TO DO 10/june/2016--11/june PROFILE PAGE
" truncate-after="20" toggle="true"></jb-truncate>

output will be -
TODAYS WORK TO DO 10...

future scope
add icons support for show more/show less
add global config for default/ truncate-after limit
add animations on show more show less