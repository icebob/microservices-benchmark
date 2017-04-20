# microservices-benchmark
Benchmark of microservices frameworks for NodeJS.

## Frameworks in benchmark

| Package | Version |
| ------- | ----- |
| [Seneca](https://github.com/senecajs/seneca) | 3.2.2 |
| [Hemera](https://github.com/hemerajs/hemera) | 0.4.4 |
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 |
| [Studio](https://github.com/ericholiveira/studio) | 0.13.3 |
| [Moleculer](https://github.com/ice-services/moleculer) | 0.4.0 |

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
√ Seneca*                 11,723 rps
√ Hemera*                  4,727 rps
√ Nanoservices*           71,189 rps
√ Moleculer*           1,039,045 rps

   Seneca* (#)                0%         (11,723 rps)   (avg: 85μs)
   Hemera*               -59.68%          (4,727 rps)   (avg: 211μs)
   Nanoservices*        +507.24%         (71,189 rps)   (avg: 14μs)
   Moleculer*         +8,763.08%      (1,039,045 rps)   (avg: 962ns)
```
[![Result chart](https://cloud.highcharts.com/images/utideti/3/800.png)](http://cloud.highcharts.com/show/utideti)

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