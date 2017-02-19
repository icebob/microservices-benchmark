# microservices-benchmark
Benchmark of microservices frameworks for NodeJS.

## Frameworks in benchmark

| Package | Version |
| ------- | ----- |
| [Seneca](https://github.com/senecajs/seneca) | 3.2.2 |
| [Hemera](https://github.com/hemerajs/hemera) | 0.4.4 |
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 |
| [Moleculer](https://github.com/ice-services/moleculer) | 0.4.0 |

## Test runner computer
```
   Windows_NT 6.1.7601 x64
   Node.JS: 6.9.2
   V8: 5.1.281.88
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8
```

## Result
```
Suite: Call local actions
√ Seneca x 5,342 ops/sec ±2.64% (72 runs sampled)
√ Hemera x 1,643 ops/sec ±3.80% (76 runs sampled)
√ Nanoservices x 31,902 ops/sec ±0.56% (83 runs sampled)
√ Moleculer x 239,099 ops/sec ±2.69% (81 runs sampled)

   Seneca         -97.77%      (5,342 ops/sec)
   Hemera         -99.31%      (1,643 ops/sec)
   Nanoservices   -86.66%     (31,902 ops/sec)
   Moleculer        0.00%    (239,099 ops/sec)
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

> For Hemera need to install [NATS](http://nats.io/) server too.

Start nats server and 
```
$ npm start
```