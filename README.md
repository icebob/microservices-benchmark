# microservices-benchmark
Benchmark of microservices frameworks for NodeJS

## Frameworks in benchmark

| Package | Version |  |
| ------- | ----- | ------- |
| [Seneca](https://github.com/senecajs/seneca) | 3.2.2 | -
| [Hemera](https://github.com/hemerajs/hemera) | 0.4.4 | -
| [Nanoservices](https://github.com/SuperID/nanoservices) | 0.0.11 | -
| [Servicer](https://github.com/icebob/servicer) | 0.3.0 | -

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

›› Seneca x 5,019 ops/sec ±2.57% (73 runs sampled)
›› Hemera x 1,705 ops/sec ±3.10% (80 runs sampled)
›› Nanoservices x 32,941 ops/sec ±2.33% (82 runs sampled)
›› Servicer x 213,765 ops/sec ±3.41% (83 runs sampled)

   Seneca         -97.65%      (5,019 ops/sec)
   Hemera         -99.20%      (1,705 ops/sec)
   Nanoservices   -84.59%     (32,941 ops/sec)
   Servicer         0.00%    (213,765 ops/sec)
```
[![Result chart](https://cloud.highcharts.com/images/utideti/800.png)](http://cloud.highcharts.com/show/utideti)