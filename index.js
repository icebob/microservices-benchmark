"use strict";

let Promise = require("bluebird");
let Benchmarker = require("./benchmarker");
Benchmarker.printHeader("Microservices benchmarks");

let bench = new Benchmarker({ async: true, name: "Call local actions", spinner: true });

let seneca;
// Seneca
(function () {
	seneca = require("seneca")();

	seneca.add({ cmd: 'add' }, (msg, done) => {
		// console.log("Call", msg);
		done(null, { res: msg.a + msg.b });
	});

	bench.add("Seneca", () => {
		return new Promise(resolve => {
			seneca.act({ cmd: 'add', a: 5, b: 3 }, (err, res) => {
				if (err)
					return console.error(err);

				resolve(res);
			});
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

	bench.add("Hemera", () => {
		return new Promise(resolve => {
			hemera.act({ topic: 'math', cmd: 'add', a: 5, b: 3 }, (err, res) => {
				if (err)
					return console.error(err);

				resolve(res);
			});
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

	bench.add("Nanoservices", () => {
		return new Promise(resolve => {
			nanoservices.call('add', { a: 5, b: 3 }, (err, ret) => {
				if (err)
					return console.error(err);
				
				resolve(ret);
			});
		});
	});
})();

// Servicer
let broker;
(function () {

	const { ServiceBroker, Service } = require("servicer");
	broker = new ServiceBroker();

	new Service(broker, {
		name: "math",
		actions: {
			/*
			add: {
				handler({ params }) {
					return params.a + params.b;
				}
			},
*/
			add({ params }) {
				return params.a + params.b;
			}
		}
	});
	broker.start();

	bench.add("Servicer", () => {
		// Return with Promise
		return broker.call("math.add", { a: 5, b: 3 });
	});

})();

setTimeout(() => {
	bench.run().then(() => {
		hemera.close();
		broker.stop();
	});
}, 1000);
