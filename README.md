# microservices-benchmark
Benchmark of microservices frameworks for NodeJS.

## Frameworks in benchmark

| Package | Version |
| ------- | ----- |
| [Seneca](https://github.com/senecajs/seneca) | 3.3.0 |
| [Hemera](https://github.com/hemerajs/hemera) | 5.8.6 |
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 |
| [Moleculer](https://github.com/ice-services/moleculer) | 0.13.0 |

## Test runner computer
```
   Windows_NT 6.1.7601 x64
   Node.JS: 8.11.0
   V8: 6.2.414.50
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8
```

## Local (in-memory) requests

### Result
```
Suite: Call local actions
√ Moleculer*           1,713,579 rps
√ Nanoservices*           90,510 rps
√ Seneca*                 13,252 rps

   Moleculer*              0%      (1,713,579 rps)   (avg: 583ns)
   Nanoservices*      -94.72%         (90,510 rps)   (avg: 11μs)
   Seneca*            -99.23%         (13,252 rps)   (avg: 75μs)
```
[![Result chart](charts/benchmark_local.svg)](http://cloud.highcharts.com/show/utideti)

## Remote (via transporter) requests

### Result
```
Suite: Call remote actions
√ Moleculer*           10,445 rps
√ Hemera*               6,655 rps
√ Cote*                15,442 rps
√ Seneca*               2,947 rps

   Moleculer*      -32.36%         (10,445 rps)   (avg: 95μs)
   Hemera*          -56.9%          (6,655 rps)   (avg: 150μs)
   Cote*                0%         (15,442 rps)   (avg: 64μs)
   Seneca*         -80.91%          (2,947 rps)   (avg: 339μs)
```
[![Result chart](charts/benchmark_remote.svg)](http://cloud.highcharts.com/show/abyfite)

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