# microservices-benchmark
Benchmark of microservices frameworks for NodeJS.

## Frameworks in benchmark

| Package | Version |
| ------- | ----- |
| [Seneca](https://github.com/senecajs/seneca) | 3.3.0 |
| [Hemera](https://github.com/hemerajs/hemera) | 0.10.4 |
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 |
| [Studio](https://github.com/ericholiveira/studio) | 0.13.4 |
| [Moleculer](https://github.com/ice-services/moleculer) | 0.6.0 |

## Test runner computer
```
   Windows_NT 6.1.7601 x64
   Node.JS: 6.10.0
   V8: 5.1.281.93
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8
```

## Result
```
Suite: Call local actions
√ Seneca x 5,179 ops/sec ±3.26% (68 runs sampled)
√ Hemera x 1,764 ops/sec ±3.06% (78 runs sampled)
√ Nanoservices x 33,476 ops/sec ±0.59% (85 runs sampled)
√ Studio x 1,441,898 ops/sec ±2.29% (87 runs sampled)
√ Moleculer x 481,289 ops/sec ±3.32% (88 runs sampled)

   Seneca         -99.64%      (5,179 ops/sec)
   Hemera         -99.88%      (1,764 ops/sec)
   Nanoservices   -97.68%     (33,476 ops/sec)
   Studio           0.00%   (1,441,898 ops/sec)
   Moleculer      -66.62%    (481,289 ops/sec)
```
[![Result chart](https://cloud.highcharts.com/images/utideti/800.png)](http://cloud.highcharts.com/show/utideti)

## Run benchmark
Install dependencies
```
$ npm install
```
or
```
$ yarn
```

> For Hemera need to install a [NATS](http://nats.io/) server too.

Start nats server and 
```
$ npm start
```