# netgear-downloader-casper
This script can add a torrent to netgear downloader tool using CasperJS

# Requierements

- A Netgear router with Netgear Downloader installed (pre-installed)
- An USB drive connected to router, serving as NAS.

# Scripts

addtorrent.js: Uses CasperJS to connect your router an add a torrent stored in NAS router.
run_windows.cmd: Take all torrent files in a directory and copy them to NAS (using a shared drive) and runs addtorrent.js to add it to download queue of Netgear Downloader


# Considerations:

- This is my first script with CasperJS, just testing it but is nice ;-).
- Netgear Downloader currently is in Beta, and it's not very reliable. 
	* Only support a max of 20 torrents in download list
	* Sometimes the NAS freezes and have to restart the router