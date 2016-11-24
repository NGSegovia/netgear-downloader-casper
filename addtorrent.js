var casper = require('casper').create({
    viewportSize: {width: 1280, height: 800},
	 verbose: true,
    logLevel: "error"
});

casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)')
casper.start('http://admin:password@192.168.1.1/Download_manager.htm');

casper.on('popup.created', function() {
    this.echo("url popup created : " + this.getCurrentUrl(),"INFO");
});

casper.thenClick('input[value="usb"]',function() {
    this.echo('Main USB selected: ');
});

casper.thenClick('#browser1',function() {
	this.waitForPopup(/.*/, function(){
        this.echo("popup opened");
    })
	this.withPopup(/.*/, function(){
		this.thenClick('a#sd2',function() {
			this.capture('screenshot.png')
		});
		this.thenClick('button[name="ok"]',function() {
			this.echo('Pushed OK');
		});
	});
});

casper.wait(3000, function() {
	this.echo("Wait to load");
});

casper.thenClick('button[name="add_task"]',function() {
    this.echo('Confirmed');
});

casper.wait(3000, function() {
	casper.capture('screenshot2.png');
});


casper.run();