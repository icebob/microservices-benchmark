# microservices-benchmark
Benchmark of microservices frameworks for NodeJS.

## Frameworks in benchmark

| Package | Version |
| ------- | ----- |
| [Seneca](https://github.com/senecajs/seneca) | 3.3.0 |
| [Hemera](https://github.com/hemerajs/hemera) | 2.1.0 |
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 |
| [Moleculer](https://github.com/ice-services/moleculer) | 0.11.1 |

## Test runner computer
```
   Windows_NT 6.1.7601 x64
   Node.JS: 8.4.0
   V8: 6.0.286.52
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8
```

## Local (in-memory) requests

### Result
```
Suite: Call local actions
√ Moleculer*           2,021,189 rps
√ Nanoservices*           94,116 rps
√ Seneca*                 13,621 rps

   Moleculer*              0%      (2,021,189 rps)   (avg: 494ns)
   Nanoservices*      -95.34%         (94,116 rps)   (avg: 10μs)
   Seneca*            -99.33%         (13,621 rps)   (avg: 73μs)
```
[![Result chart](https://cloud.highcharts.com/images/utideti/5/800.png)](http://cloud.highcharts.com/show/utideti)

## Remote (via NATS) requests

### Result
```
Suite: Call remote actions
√ Moleculer*            8,274 rps
√ Hemera*               5,225 rps
√ Cote*                14,163 rps
√ Seneca*               2,865 rps

   Moleculer*      -41.58%          (8,274 rps)   (avg: 120μs)
   Hemera*         -63.11%          (5,225 rps)   (avg: 191μs)
   Cote*                0%         (14,163 rps)   (avg: 70μs)
   Seneca*         -79.77%          (2,865 rps)   (avg: 349μs)
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