var options = {
  hostname: 'mokjs.com',
  port: 80,
  path: '/',
  method: 'GET'
};

var req = require('http').request(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('BODY: ' + chunk);
	});
	res.on('end', function (chunk) {
		console.log('end~'+chunk);
	});
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
//req.write('data\n');
//req.write('data\n');
req.end();
