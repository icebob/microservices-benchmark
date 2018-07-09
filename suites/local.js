"use strict";

let Promise = require("bluebird");
let Benchmarkify = require("benchmarkify");

let benchmark = new Benchmarkify("Microservices benchmark").printHeader();

const bench = benchmark.createSuite("Call local actions");

/* Hemera (not relevant)
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
				console.error(err);

			done();
		});
	});

})();
*/

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

	bench.add("Moleculer", done => {
		broker.call("math.add", { a: 5, b: 3 }).then(done);
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
				console.error(err);
			
			done();
		});
	});
})();

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
				console.error(err);

			done();
		});
	});

})();

Promise.delay(1000).then(() => benchmark.run([bench])).then(() => {
	broker.stop();
});
