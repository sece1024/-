# 课程作业-期中

## 要求

作业内容：制作网页，应用HTML5、CSS3、js技术。

 

要求：

1. 要求网页中有图片、文字、图形图像及动画。

2. 做好注释，越详细越好，重点是写清楚设计思路和对程序的理解。

 

提交内容：

1. 代码放在github上

2. 文档（姓名+班级+学号-期中.doc文件）文档写网页介绍及框架（2000字以上，不含代码）

 

提交时间：最晚：5月20日。

## 内容

### 登陆界面

`index.html`

* 固定用户名和密码
  * 用户名：none
  * 密码：123



### 注册界面

[]: .\Web-animation-and-3D-webpage-production\期中\logup.html	"注册界面"

**描述：**

*布局大体与登录界面类似，但只有一个注册按钮。*

* 使用web Storage保存数据
  * 验证浏览器是否支持该功能
  * 用户名或密码为空时出现提示框
  * 不能重复注册(若当前用户已经注册，出现提示框)

### 游戏页

`puzzle.html`

*八数码游戏*

**描述：**

九宫格内有0到8九个数字，其中0相当于空格，无法点击；

点击0周围的数字，该数字会和0交换位置；

当所有数字按照0到8的顺序排列时获胜；

#### 移动

**获取可移动下标:**

1. 将一维数组转化为二维数组
2. 验证0周围四个数的合法性
3. 将合法数的二维坐标转化为一维下标

**数据交换**

1. 判断被点击的数字是否在可移动下标之中，是则交换

**隐藏0**

1. 刷新期盼时遍历所有网格，将数字0的颜色改为背景颜色，将其他数字颜色改为初始数字颜色





#### 乱序

*打乱棋盘顺序*

1. 将计数器清零
2. 随机移动100次

**随机移动n次：**

1. 使用`Math.random()`获取随机数

2. 获取可移动方向数

3. 根据随机数选择一个方向

4. 使用Promise+setTimeout在每次移动后睡眠一段时间

   ```js
   // 睡眠
   function sleep(time) {
       return new Promise(resolve => {
           setTimeout(resolve, time);
       })
   }
   
   // 打乱棋盘-移动n次
   async function moveNTimes(n) {
       var i = 0;
       for (; i < n; i++) {
           randomMove();
           await sleep(300);/*async await实际上是generator和promise的语法糖，在提供同步编程方式实现异步调用的基础上，同时满足对sleep函数语义化的支持，也是常用的sleep的实现方式。 */
       }
   
   
   }
   ```

   >  Promise是异步编程的已知解决方法
   
   Promise的特点：
   
   1. 对象的状态不受外界影响
      * Pending(进行中)
      * Fulfilled(已成功)
      * Rejected(已失败)
   2. 一旦状态改变就不会再变(两种变化)
      * Pending->Fulfilled
      * Pending->Rejected
   
   用法：
   
   ```js
   var promise = new Promise(function(resolve, reject){
       // ... some code
       
       if (/* 异步操作成功 */) {
           resolve(value);
       } else {
           reject(error);
       }
   })
   ```
   
   >  Promise构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由JavaScript引擎提供，不用自己部署。
   >   resolve作用是将Promise对象状态由“未完成”变为“成功”，也就是`Pending -> Fulfilled`，在异步操作成功时调用，并将异步操作的结果作为参数传递出去；而reject函数则是将Promise对象状态由“未完成”变为“失败”，也就是`Pending -> Rejected`，在异步操作失败时调用，并将异步操作的结果作为参数传递出去。
   >
   > #### then
   >
   >   Promise实例生成后，可用`then`方法分别指定两种状态回调参数。then 方法可以接受两个回调函数作为参数：
   >
   > 1. Promise对象状态改为Resolved时调用 （必选）
   > 2. Promise对象状态改为Rejected时调用 （可选）
   
   基本用法实例：
   
   ```js
   function sleep(ms) {
       return new Promise(function(resolve, reject) {
           setTimeout(resolve, ms);
       })
   }
   sleep(500).then( ()=> console.log("finished"));
   //这段代码定义了一个函数sleep，调用后，等待了指定参数(500)毫秒后执行then中的函数。值得注意的是，Promise新建后就会立即执行。
   ```
   
   > ### 拓展 async/await
   >
   > #### async
   >
   >   顾名思义，异步。async函数对 Generator 函数的改进，async 函数必定返回 Promise，我们把所有返回 Promise 的函数都可以认为是异步函数。特点体现在以下四点：
   >
   > - 内置执行器
   > - 更好的语义
   > - 更广的适用性
   > - 返回值是 Promise
   >
   > 
   >
   > #### await
   >
   >   顾名思义，等待。正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。
   >
   > #### 混合使用
   >
   > ```js
   > function sleep(ms) {
   >     return new Promise(function(resolve, reject) {
   >         setTimeout(resolve,ms);
   >     })
   > }
   > async function handle(){
   >     console.log("AAA")
   >     await sleep(5000)
   >     console.log("BBB")
   > }
   > 
   > handle();
   > 
   > // AAA
   > // BBB (5000ms后)
   > 
   > ```
   >
   >  
   >
   > 我们定义函数sleep，返回一个Promise。然后在handle函数前加上async关键词，这样就定义了一个async函数。在该函数中，利用await来等待一个Promise。

#### ~~AI~~

~~使用AStart算法将八数码还原，动态演示还原过程。~~

