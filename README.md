# General-Light-Eggjs-Web-Backend
通用轻量级基于Eggjs的Web后台服务框架

## 1 简介
灵活处理所有异常边界条件, 能够进行调用级别的日志trace, 便于使用ELK分析日志数据  
能够普适于绝大多数Web后台场景

## 2 Middleware层
### 2.1 错误处理中间件
request第一个访问的(开发人员编写的), 以及最后一个访问的中间件

**作用**  
用于捕获所有开发代码层面(非框架)的异常, 并设置错误响应结构体,
正常的request/response不做任何操作  
**代码结构**  
```
async function errorHandler(ctx, next) {
  try {
    await next(); // 立刻访问下一个middleware或者controller
  } catch (err) {
    ctx.setErrResBody(err); // 如果捕获了异常, 则调用setErrResBody构造错误响应体
  }
}
```
**优点**  
a. 解放业务代码中的异常处理  
b. 捕获全部业务代码产生的异常, 保证稳定性  
### 2.2 校验中间件
对request进行检查, 两种方式:  
a. 使用Hapi/joi  
b. 编程实现
## 3 Controller层
MVC中的Controller, 作为Http请求与业务Service解耦的层次, 使用Eggjs的Controller
## 4 Service层
真正的业务层次, 使用Eggjs的Controller
## 5 Dao层
数据访问层, 封装数据库读写的调用(可以放在Service层)
## 6 Common层
服务的辅助模块和变量等
### 6.1 错误码规范化以及与响应体的映射
使用规范化的JSON结构(或者字符串)命名错误码关键码和值
### 6.2 响应关键码
由ERR_CODE规范
### 6.3 响应体
由RES_BODY规范
## 7 Extend层
### 7.1 Context扩展
向context增加了setErrResBody和setSuccessResBody函数

**setErrResBody:**

针对异常响应的构造函数, 在错误处理中间件中执行

**setSuccessResBody:**

针对正确响应的构造函数, 在controller对应的函数中执行(建议)

**extLogger:**

使用Dash-Logger开源项目, 代替Eggjs内置logger
## 8 测试
首先执行npm install  
```
npm install
```
使用Mocha, 执行  
```
npm run test
```
logs目录下可见日志
## 9 使用dash-logger
使用Dash-logger, 以支持traceId和ELK日志分析
```
2021-11-03T06:57:50.648Z info 000000010IIJZqVj 5728 /demo/foo/add 78ms | addOperationBodyValidator
2021-11-03T06:57:50.651Z info 000000010IIJZqVj 5728 /demo/foo/add 82ms | controller/demo/foo/add
2021-11-03T06:57:50.651Z info 000000010IIJZqVj 5728 /demo/foo/add 82ms | service/demo/add, operand1: 1, operand2: 2
2021-11-03T06:57:50.652Z info 000000010IIJZqVj 5728 /demo/foo/add 83ms | response body: {"code":0,"msg":"add finished","data":3}
2021-11-03T06:57:50.652Z info 000000010IIJZqVj 5728 /demo/foo/add 83ms | req body: {"operand1":1,"operand2":2} succeed
2021-11-03T06:57:50.663Z info 00000002wgW2H2rB 5728 /demo/foo/minus 0ms | minusOperationBodyValidator
2021-11-03T06:57:50.664Z info 00000002wgW2H2rB 5728 /demo/foo/minus 1ms | controller/demo/foo/minus
2021-11-03T06:57:50.664Z info 00000002wgW2H2rB 5728 /demo/foo/minus 1ms | service/demo/minus, minuend: 1, subtrahend: 0
2021-11-03T06:57:50.665Z info 00000002wgW2H2rB 5728 /demo/foo/minus 2ms | response body: {"code":0,"msg":"minus finished","data":1}
2021-11-03T06:57:50.665Z info 00000002wgW2H2rB 5728 /demo/foo/minus 2ms | req body: {"minuend":1,"subtrahend":0} succeed
2021-11-03T06:57:50.671Z info 00000003W2du4rAa 5728 /demo/foo/divide 0ms | divideOperationBodyValidator
2021-11-03T06:57:50.672Z info 00000003W2du4rAa 5728 /demo/foo/divide 1ms | controller/demo/foo/divide
2021-11-03T06:57:50.672Z info 00000003W2du4rAa 5728 /demo/foo/divide 1ms | service/demo/divide, dividend: 1, divisor: 2
2021-11-03T06:57:50.672Z info 00000003W2du4rAa 5728 /demo/foo/divide 1ms | response body: {"code":0,"msg":"divide finished","data":0.5}
2021-11-03T06:57:50.673Z info 00000003W2du4rAa 5728 /demo/foo/divide 2ms | req body: {"dividend":1,"divisor":2} succeed
```
日志依次对应:
```
${时刻} ${level} ${traceId} ${进程id} ${path} ${时间消耗} '|' ${日志内容}
```

示例中, 使用traceId: "000000010IIJZqVj", "00000002wgW2H2rB", "00000003W2du4rAa"可以trace三次调用的日志

