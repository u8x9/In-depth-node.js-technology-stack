# ES Module

## ES Module 和 CommonJS 模块化的不同之处

+ 一方面，它使用了 `import` 和 `export` ***关键字***

+ 另一方面，它采用编译期的静态分析，并且也加入了动态引用的方式

## 实现

+ `export` 负责将模块内的内容导出

+ `import` 负责从其它模块导入内容

> 使用了 ES Module 将自动采用严格模式: `use strict`
> 严格模式： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

