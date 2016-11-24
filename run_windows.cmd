ECHO OFF
echo "Directory:" %1

for %%i in (%1\*.torrent) do (
 echo "File:" %%i
 del z:\1111.torrent
 copy %%i z:\1111.torrent
 casperjs new1.js
 )