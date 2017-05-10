# microservices-benchmark
Benchmark of microservices frameworks for NodeJS.

## Frameworks in benchmark

| Package | Version |
| ------- | ----- |
| [Seneca](https://github.com/senecajs/seneca) | 3.3.0 |
| [Hemera](https://github.com/hemerajs/hemera) | 1.1.5 |
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 |
| [Moleculer](https://github.com/ice-services/moleculer) | 0.7.1 |

## Test runner computer
```
   Windows_NT 6.1.7601 x64
   Node.JS: 6.10.0
   V8: 5.1.281.93
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8
```

## Local (in-memory) requests

### Result
```
Suite: Call local actions
√ Seneca*                 12,081 rps
√ Nanoservices*           64,921 rps
√ Moleculer*             723,033 rps

   Seneca* (#)             0%         (12,081 rps)   (avg: 82μs)
   Nanoservices*      +437.4%         (64,921 rps)   (avg: 15μs)
   Moleculer*        +5,885.11%        (723,033 rps)   (avg: 1μs)
```
[![Result chart](https://cloud.highcharts.com/images/utideti/5/800.png)](http://cloud.highcharts.com/show/utideti)

## Remote (via NATS) requests

### Result
```
Suite: Call remote actions
√ Seneca*               2,140 rps
√ Hemera*               4,354 rps
√ Moleculer*            8,664 rps

   Seneca* (#)          0%          (2,140 rps)   (avg: 467μs)
   Hemera*        +103.42%          (4,354 rps)   (avg: 229μs)
   Moleculer*     +304.81%          (8,664 rps)   (avg: 115μs)
```
[![Result chart](https://cloud.highcharts.com/images/abyfite/1/800.png)](http://cloud.highcharts.com/show/abyfite)

## Run benchmark
Install dependencies
```
$ npm install
```
or
```
$ yarn
```

> For remote test need to install a [NATS](http://nats.io/) server too.

Start nats server (`gnatsd`) and 
```
$ npm run bench local
$ npm run bench remote
```