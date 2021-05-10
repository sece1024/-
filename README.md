[TOC]



# 网页动画与三维网页制作

## 第一周
*编写一个校园网注册页面*

[school-net.html](http://39.101.168.137/hgx/school-net.html)

## 第三周
*实现课本第五章的时钟代码，在此基础上做一定优化。*

[clock.html](http://39.101.168.137/hgx/clock.html)

1. 点击绘制按钮以后，秒针、分针、时针都会延迟出现，解决这个问题使得所有图案同时出现；
2. 秒针每秒走动一次，此 时分针和时针一直指向整点位置，修改代码使得它看起来更像真实时钟； 



**解决方法：**

1. 在调用setInterval("Refresh();",1000);刷新指针之前，先调用一下Refresh();

   然后在一段时间（接近但小于1秒钟）后消除刚才画的指针。（使用setTimeout计时）。

   ```javascript
   setTimeout(function(){
   					cxt.clearRect(5,-1,slen+1,4);
   					cxt.clearRect(5,-1,mlen+1,5);
   					cxt.clearRect(5,-3,hlen+1,6);
   				},990);
   ```

2. 重新绘制时，分针旋转时加上一个秒针偏移量(m+s/60)，时针旋转时加上一个分针偏移量(h+m/60)。

   缺陷：因为有绘制时有偏移，清除的时候也会留下一些痕迹。
   
   解决：清除分针和时针时，给它们的旋转角度也加上一个偏移量：`cxt.rotate((lm+ls/60)*Math.PI/30);`,`cxt.rotate((lh+lm/60)*Math.PI/6);`



## 第四周

`2021/3/21`

### Web SQL

>  提供关系型数据库的基本功能

* 创建或打开数据库

  `openDatabase(daName,dbVersion,dbDescribe,dbSize[,callback()]);`

  1. daName：指定数据库名称
  2. dbVersion：版本号
  3. dbDescribe：描述说明
  4. dbSize：指定大小，单位为字节
  5. callback：可选参数，指定回调函数

```html
<!DOCTYPE HTML>
<meta charset="utf-8" />
<script>
	function initDatabase(){
		if(!window.openDatabase){
			alert('浏览器不支持Web SQL数据库。');
		}else{
			var dbName = 'myDB';
			var dbVersion = '1.0';
			var dbDec = 'Demo Database';
			var dbSize = 100000;
			// 创建数据库，并调用showResult方法
			DB = openDatabase(dbName,dbVersion,dbDec,dbSize,showResult());					
		}
	}
	function showResult(){
		var result = document.getElementById("result");
		result.innerHTML = '数据库创建成功！';
	}
</script>
<fieldset>
	<legend>openDatabase的应用</legend>
	<span id="result"></span>
	<button onclick="initDatabase()">打开/创建</button>
</fieldset>
<!-- <html>
	<h1>Hello!</h1>
</html> -->
```

### 增删改查

> JavaScript调用executeSql()方法来执行相应的SQL语句。



> 事务：作为单个逻辑工作单元执行的一系列操作，满足ACID。

* ACID
  * 原子性
  * 一致性
  * 隔离性
  * 持久性

**开启事务的语法格式：**

```javascript
db.transaction(function(tx)){
               tx.executeSql('sql')
               }
```

或者：

```javascript
tx.executeSql('sql语句',
             [params],
             function(tx,rs){},
             function(tx,error));

```





#### 执行流程

1. 打开数据库
2. 开启一个事务
3. 执行相应的SQL语句



#### 建表

`tx.executeSql('create table [if not exits] tablename (column1,column2,...)')`



#### 插入数据

`tx.executeSql('insert into create tablename(column1,column2,column3) value(?,?,?)',[param1,param2,param3]);`



---
`2021.3.31`



## 第五周 
puzzle-v0.1.html

拼图游戏原型：暂时用数字代替图片，只实现基本的鼠标相应和方块移动功能
version：0.1

## 第六周

`2021/4/7`

puzzle-v0.2.html

数据与界面分离: 数据部分

version:	0.2

describe:	*用数组保存方格信息，网页制点击方格后先改变数组，再根据数组重绘界面*



~~网页拼图游戏-构思~~ 

### 基本功能
1. 可扩展的拼图游戏，初始网格为`3*3`，后面应该容易扩展成`4*4`，`5*5`，`6*6`...
2. 图片可以修改，网页中有供选择的图片，用户也可上传图片切割成拼图
3. 添加AI，可以要求提示或者选择让AI来操作，也可以选择竞赛模式与不同等级的AI比赛

### 扩展功能
* 点击鼠标右键隐藏拼图界面，并显示搜索引擎
* 过程录制功能
* 用户自己上传或绘制拼图图案

### 数据与界面分离

`2021/4/7`

#### 数据：
1. 棋盘用二维数组`array_board = [[1,2,3],[4,5,6],[7,8,0]]`表示，0表示空。
2. 目标状态为`array_board.toString()`, 也就是'1，2，3，4，5，6，7，8，0'
3. 数据移动表示方格移动，若点击的方块在0周围，则与0交换位置，否则不变

#### 界面：
1. 点击方块 -> 改变array_board中的数据 -> 调用函数重新绘制(暂未实现，但可在控制台中看到改变后的数据)

## css

```html
<html>

<style>


  .red-text {

    color: red;

  }

</style>

</html>
```

定义类时前缀加“.”，使用时不需要（class = "red-text"）

定义id时前缀加“#”，id优先级较高



---

```html
字体

font-family: monospace;

字体大小

font-size: 16px;

图片大小

width: 100px;

 

图片边框

 .thick-green-border{

  border-color:green;

  border-width:10px;

  border-style:solid;

 }
```



添加

`border-radius: 10px;`

可将边框变为圆角矩形，这里的像素值也可用百分数代替，如50%，那么边框将变成圆形

---

```html
背景颜色
  .silver-background{
    background-color:silver;
  }
```

---

```html
Padding:垫片
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }
  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }
  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }
  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top:40px;
    padding-bottom:20px;
  }
</style>
<h5 class="injected-text">margin</h5>
<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

按照时钟顺序：上、右、下、左，也可这样使用

padding:40px 20px 20px 40px;

用空格分隔

## 期中

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

## 期末

1. 主界面
描述：登陆界面，有用户名和密码输入框，以及登陆注册按钮；
2. 功能界面
描述：
	* 网站收藏页
	可以添加、删除网站。
	* 任务页
		* 创建每日任务
		* 一周时间表
	* 游戏页
		* 九宫格拼图
		* 翻牌子
		* 随手画
		可以导出为jpg、png
	* 便签页
	记录文本，可以导出为txt或者excel
3. 其他
	* 数据放在服务器
	* 记录访客ip地址
	* 更换主题
	* 播放背景音乐

