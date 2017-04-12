"use strict";

let Promise = require("bluebird");
let Benchmarkify = require("benchmarkify");

let benchmark = new Benchmarkify("Microservices benchmarks").printHeader();

let bench = benchmark.createSuite("Call local actions");

// Seneca
let seneca;
(function () {
	seneca = require("seneca")();

	seneca.add({ cmd: 'add' }, (msg, done) => {
		// console.log("Call", msg);
		done(null, { res: msg.a + msg.b });
	});

	bench.add("Seneca", done => {
		seneca.act({ cmd: 'add', a: 5, b: 3 }, (err, res) => {
			if (err)
				return console.error(err);

			done();
		});
	});

})();

// Hemera
let hemera;
(function () {

	const Hemera = require('nats-hemera');
	const nats = require('nats').connect("nats://localhost:4222");

	hemera = new Hemera(nats, { logLevel: 'error' });

	hemera.ready(() => {
		hemera.add({ topic: 'math', cmd: 'add' }, (resp, cb) => {
			//console.log("Call", resp);
			cb(null, resp.a + resp.b);
		});
	});

	bench.add("Hemera", done => {
		hemera.act({ topic: 'math', cmd: 'add', a: 5, b: 3 }, (err, res) => {
			if (err)
				return console.error(err);

			done();
		});
	});

})();

// Nanoservices
let nanoservices;
(function () {

	const { Manager } = require('nanoservices');

	nanoservices = new Manager();

	nanoservices.register('add', function (ctx) {
		// ctx.debug('add: a=%s, b=%s', ctx.params.a, ctx.params.b);
		ctx.result(ctx.params.a + ctx.params.b);
	});

	bench.add("Nanoservices", done => {
		nanoservices.call('add', { a: 5, b: 3 }, (err, ret) => {
			if (err)
				return console.error(err);
			
			done();
		});
	});
})();

// Studio
(function () {

	let Studio = require('studio');
	Studio(function mathAddService(a, b){
		return a + b;
	});

	let service = Studio("mathAddService");

	bench.add("Studio", done => {
		service(5, 3);
		done();
	});

})();

// Moleculer
let broker;
(function () {

	const { ServiceBroker } = require("moleculer");
	broker = new ServiceBroker();

	broker.createService({
		name: "math",
		actions: {
			add({ params }) {
				return params.a + params.b;
			}
		}
	});
	broker.start();

	bench.add("Moleculer", done => broker.call("math.add", { a: 5, b: 3 }).then(done));

})();

setTimeout(() => {
	bench.run().then(() => {
		hemera.close();
		broker.stop();
	});
}, 1000);
