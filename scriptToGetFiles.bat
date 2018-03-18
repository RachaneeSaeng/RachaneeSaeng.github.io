set process_files=dist\* data\* images\* images\backend\* images\frontend\* images\portfolio\* images\methodology\* images\tools\* images\icons\*

echo "\", > files.txt
echo "\index.html", >> files.txt
for %%i in (%process_files%) do (
	echo "\%%i", >> files.txt
)

pause 