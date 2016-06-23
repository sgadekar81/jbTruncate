JbTruncate -
	
	it is very basic lib which displays truncated  string if it exeeds the specified limit or else the old string

Options -

Attr               Type                          Desc
string             String                        The complete string which is to be truncate 
truncate-after     Integer                       Number of characters after which string is to be truncate (default30char)
toggle             Boolean                       enable show more show/less on the old/truncated string default false

Usage -

Step1 - Include jbTruncate.js in your index file
	<script src=".../jbTruncate.js"></script>

Step2-  Add 'jb' module dependency in your app.js file

Step3 - 
	<jb-truncate string="TODAYS WORK TO DO 10/june/2016--11/june PROFILE PAGE
	" truncate-after="20" ></jb-truncate>

	<jb-truncate string="TODAYS WORK TO DO 10/june/2016--11/june PROFILE PAGE
	" truncate-after="20" toggle="true"></jb-truncate>

output -
	TODAYS WORK TO DO 10...

Future Scope -
			add icons support for show more/show less
			add global config for default/ truncate-after limit
			add animations on show more show less
