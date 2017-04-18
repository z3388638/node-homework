var http = require('http');
var request = require('request');

var server = http.createServer(function (req, res) {
	request.post({
		url: 'http://ycchen.im.ncnu.edu.tw/join.php', 
		form: {
			peehai: "YuanCheng"
		}
	}, function (err, r, body) {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(body);
		res.end();
	});
});

server.listen(65432);
console.log('http://127.0.0.1:65432/');
