# 期末作业

## 要求

课程大作业-期末

作业内容：题目自定，应用前端和后端技术。
要求：
1.应用HTML5、CSS、JS、PHP（ASP等）技术。
2.	做好注释，越详细越好，重点是写清楚设计思路和对程序的理解。
提交内容：
1.代码放在github上，代码不少于500行。
2.文档（姓名+班级+学号-期末.doc文件）
文档写网页介绍及框架（3000字以上，不含代码）

第12周将作业带到机房，当场演示。
提交时间：最晚：5月20日。

## 内容

* 使用vue2和element-ui

  



## 实现逻辑

1. 初始页面为登录界面，登录验证成功后进入主页
2. 主页布局为：顶栏、左侧导航栏、中部显示栏，点击导航栏中的选项可改变显示区域内的内容
3. 左侧导航栏：
   * 工具箱
     * 文本反转
     * 日历
   * 娱乐
     * 八数码游戏
     * 每日笑话

## 页面设计

（1）初始页面为登录界面，登录验证成功后进入主页；

（2） 主页布局为：左侧导航栏、中部显示栏，点击导航栏中的选项可改变显示栏中的内容；

（3） 左侧导航栏包含工具箱娱乐以及测试页面；

（4） 中间为显示区域，点击左侧导航栏后，会在中间位置显示对应的内容；

导航栏分为一级页面和二级页面，点击一级页面后展开二级页面，并且同一时间只能有一个二级页面被展开。

（5） 为了减少工作量，导航栏使用js脚本生成，需要提取定义导航栏的层级数据，在将vue组件添加到路由中时使用懒加载。

（6） element-ui库中有许多便于使用的组件，比如日历，卡片，分割线之类，将这些内容添加到vue组件的模板中，使得网页内容更加丰富。

（7） 使用axios库完成网页请求功能，实现形式为：访问一个笑话网站，获取笑话后将其分条渲染到显示区域中。





## 环境搭建

### Vue：

vue是一个前端框架，安装步骤参考：

https://vuejs.org/v2/guide/

https://www.jianshu.com/p/cf70a7fa04c7

https://www.runoob.com/w3cnote/vue2-start-coding.html

vue项目用npm管理，需要提前安装node和npm并配置好环境，这次期末作业使用的模板为“webpack”，在项目根目录下进入cmd窗口使用命令:

vue-init webpacknpm install

即可完成项目的初始化。

 

### Router：

vue的路由功能需要安装router插件，安装步骤参考[安装 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/installation.html)。

cmd命令：

npm install vue-router

如果已经创建了项目：

npm install vue-router --save

 

### Element-ui：

使用时参考[组件 | Element](#/zh-CN/component/installation)。

cmd命令：

npm i element-ui -S

如果已经创建了项目：

npm install --save element-ui

 

### Axios：

安装可参考vue官方文档[使用 axios 访问 API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)。

npm安装：

npm install axios --save

 

 

## 项目结构

项目中主要使用的文件有：

App.vue

index.html

main.js;

router/index.js;

components/;

所有vue组件都放在文件夹“components”下。

 



### 登录界面：

因为前端是用Vue开发的，所以在登录界面上添加了vue的Logo表示对这个由中国人开发的前端库表示致敬，而这个Logo图片也是一个vue组件，组件名为“VueLogo.vue”。

组件是可复原的Vue示例，组件结构如下：

```html
<template>

<div id="Logo">

    <img src="../assets/logo.png">

</div>

</template>

<script>

export default {

  name: 'Logo'

}

</script>
```



它包含<template>和<script>两个部分，模板<template>中声明要显示的内容，脚本<script>中定义数据类型和一些需要使用的方法，还可在后面添加<style>标签添加样式。

 

### 页面跳转：

页面跳转功能使用路由vue-router实现。

在vue中，将组件映射路由routes，然后挂载路由到Vue上，通过<view-router />接口即可使用路由显示页面内容。

文件“router/index.js”创建了一个路由：

import Vue from 'vue'

import Router from 'vue-router'

导入Vue和路由Router

Vue.use(Router)

Router组件需要use一下才能被使用

```js
var routes = [{

  path: '/',

  redirect: '/login' //重定向

},

{

  path: '/login',

  component: () => import('@/components/MyLogin')
}

]

export default new Router({ routes })
```





将网页根目录’/’重定向到’/login’,并在’/login’目录上挂载一个组件“MyLogin”，也就是我的登录界面；

 

### 主页：

主页的组件保存在“components/Home.vue”中。

页面设计参考：[Vue + Vue-router + Element-ui 搭建一个非常简单的dashboard demo - SegmentFault 思否](https://segmentfault.com/a/1190000012015667)

用脚本批量操作的方式向路由中挂载导航栏。

先声明一个对象保存导航栏的信息。

这个对象的结构为：

{一级导航栏名称，

id，

二级导航栏：{

[

二级导航栏A:{名称，组件}，

二级导航栏B:{名称，组件}

]

}}

具体实现为“config/menu-config.js”所示。

 

主页布局分为三个部分，顶部栏、左侧栏、和中部显示区域。

顶部栏只是为了美观，没有多少实际作用。

左侧栏就是导航栏，他相当于一个菜单，点击后不是跳转页面，而是改变中部显示区域中的渲染内容。

 

### 工具箱

#### 文本反转：

实现方式参考vue.js起步教程，在输入框内输入一段文字，点击按钮可将文字反转。

```html
<template>
  <div id="TextReverse">
    <div>
      <!-- {{ msg }} -->
      <h2>输入一段文字</h2>
      <el-input v-model="msg"></el-input>
      <br />
      <el-button @click="reverse">反转</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextReverse",
  data() {
    return {
      msg: "input here",
    };
  },
  methods: {
    reverse: function () {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
<style scoped>
</style>
```

这被成为声明式渲染，vue.js的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进DOM的系统。

修改msg的数据后，模板中的内容{{msg}}也会随之改变,v-modle实现了数据的双向绑定。

 

工具箱--日历：

使用element-ui中的日历组件“el-calendar ”，获取日期对象“new Date()”后，以月的形式显示，点击按钮可以选择“上个月”，“定位到今天”，“下个月”。

```html
<template>
  <el-calendar v-model="value"></el-calendar>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>
```

 



娱乐--八数码：

这里的八数码游戏是期中项目的简化版本，开始时显示乱序的八数码，打乱顺序用的是随机移动100次的方式保证了该八数码绝对可以还原。

八数码方格上方显示了当前移动次数，每移动一次方格次数就会加一。

方格移动的实现逻辑：

八数码棋盘为一个一维数组board，初始状态为：GAOL = [1, 2, 3, 4, 5, 6, 7, 8, 0]

每个方格有一个固定的id表示它们在棋盘中的位置，方格被点击后，将这个id传入移动函数move()。

move()：

a. 首先判断当前被点击方格中的数字是否为0，不为0则进行下一步

b. 保存当前移动次数的变量moveCount加一，执行移动函数doMove()。

c. 判断当前棋盘是否等于GAOL，是则弹出胜利窗口

```js
    move: function (i) {
      console.log("you click ", i);
      // cell1.innerHTML = "*";
      if (this.board[i] != 0) {
        this.moveCount++;
        countNum.innerHTML = this.moveCount;
        this.doMove(i);
        this.flushBoard();
        if (this.board == [1, 2, 3, 4, 5, 6, 7, 8, 0]) {
          alert("You Win!");
        }
      }

      // console.log(this.board);
    }
```

 

doMove():

a. 遍历棋盘数组找到0的位置，将一维下标转换为3*3的二维棋盘坐标，判断0周围上下左右四个方向是否合法（大于等于0，小于等于2），获取所有合法坐标，将它们再次转化为一维下标后返回，这个功能封装在函数getMoves()当中，用于获取当前所有可移动方格；

b. 判断被点击的方格是否属于可移动方格，是则将当前被点击方格和0交换位置。

```js
doMove: function (n) {
      let moves = this.getMoves();
      let zeroIndex = this.getZero();
      let index = n;
      // console.log("moves: ", moves);
      var ii = 0;
      for (; ii < moves.length; ii++) {
        // console.log(moves[ii], " == ", index, moves[ii] == index);
        if (moves[ii] == index) {
          // console.log("可移动");
          this.board[zeroIndex] = this.board[index];
          this.board[index] = 0;
        }
      }
    }
```



 

初始化的时候要打乱棋盘顺序，使用随机移动的方法，设定的随机移动次数为100次，函数initRandom()会执行一个n = 100的for循环，使用getMoves()获取当前可移动方格，使用Math.random()得到一个0到1之间的随机数 r，用r乘以可移动方格的数量后对结果进行取整即可获得一个随机方格，调用doMove()函数移动这个方格就实现了模拟人随机操作的动作。

因为计数器加一和判断胜利的操作都在函数move()中，所以随机移动时既不会改变计数器的值也不会出现弹窗。

```js
    initRandom: function (n) {
      // 随机移动n次
      var i = 0;
      for (; i < n; i++) {
        let moves = this.getMoves();
        // 几个可移动方向
        let len = moves.length;
        // 0~1的随机数
        let r = Math.random();
        this.doMove(moves[parseInt(r * len)]);
      }
    }
```



 

#### 说笑话:

从网址https://autumnfish.cn/api/joke/中查询笑话，并显示在页面中。

发送网页请求的功能使用“Axios”实现，需要提前在项目中安装插件然后在main.js中引入并注册；

import axios from 'axios'Vue.prototype.$axios = axios  

全局注册，使用方法为this.$axios，在其他页面内“使用this.$axios.get(url)”，即可向url发起请求。

axios的使用方法参考：[使用 axios 访问 API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)。

使用url = “https://autumnfish.cn/api/joke/list?num=6”，查询6条笑话，保存笑话的数组为response.data.jokes。

将笑话数组保存在that.jokes中，使用vue的指令“v-for”循环将每一条笑话显示在element-ui的卡片组件“el-card”中，并且用分割线“el-divider”分开。

```html
<template>
  <div id="SpeakJokes">
    <h1>
      <el-button class="txtBtn" @click="get">{{ msg }}</el-button>
    </h1>
    <!-- 回到顶部 -->
    <el-backtop target=".txtBtn">UP</el-backtop>
    <!-- <el-button class="get" @click="get">get请求</el-button>
    <el-button class="post">post请求</el-button> -->
    <el-card class="box-card">
      <el-button
        @click="clearjokes"
        style="float: right; padding: 3px"
        type="text"
        >清空</el-button
      >
      <div v-for="item in jokes" :key="item" class="text item">
        {{ item }}
        <el-divider class="divider"></el-divider>
      </div>
    </el-card>
  </div>
</template>

<!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
<script>
// var jokeTest = ["hello"];
export default {
  name: "SpeakJokes",
  data() {
    return {
      msg: "说笑话",
      jokes: [],
    };
  },
  methods: {
    get: function () {

      this.$axios
        .get("https://autumnfish.cn/api/joke/list?num=6")
        .then((response) => {
          var that = this; //将指向vue对象的this赋值给外部方法定义的属性，然后在内部方法中使用该属性
          // 否则this指向的内容会变，无法修改this.jokes的内容

          that.jokes = response.data.jokes;
          // console.log("jokes", this.jokes);
        })
        .catch((error) => {
          console.log(error);
          alert("网络错误，不能访问");
        });

      // console.log("jokes: ", this.jokes);
    },
    clearjokes: function () {
      this.jokes = [];
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  /* width: 480px; */
  width: auto;
}

.divider {
  position: relative;
}
</style>
```



点击清空按钮可将笑话数组this.jokes置为 “[]”，this.jokes改变后，vue会自动将页面上的内容重新渲染。

 

测试页面：

测试页面作为网页的补充，组件的模板只有少量代码，当有新的东西需要加进去时可随时改变。

 

（4） Vue路由注册：

路由注册的脚本为“router/index.js”

作用是将提前写好的组件添加到路由Router中，注册完成以后还需将Router挂载到Vue上才能对路由进行访问。

要注册的组件在文件“config/menu-config.js”中提前写好，然后使用forEach循环、模板字符串、懒加载的方式进行注册。

```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import menus from '@/config/menu-config'
import VueRouter from 'vue-router'


Vue.use(Router)
var sub_home = []
menus.forEach((item) => {
    item.sub.forEach((sub) => {
        sub_home.push({
            path: `/${sub.componentName}`,
            name: sub.componentName,
            component: () =>
                import(`@/components/${sub.componentName}`)
        })
    })
})
var routes = [{
    path: '/',
    redirect: '/login' //重定向
},
{
    path: '/login',
    component: () =>
        import('@/components/MyLogin')
},
{
    path: '/home',
    component: () =>
        import('@/components/Home'),
    children: sub_home
}
]

export default new Router({ routes })
```



这样的方法为整个项目提供了十分方便的可扩展性，如果想添加新的组件需定义组件，修改menu-config.js文件，修改路由注册index.js文件，三个步骤就能在原有页面的基础上进行添加。



## 结果分析

使用vue框架生成的是一个单页面网页，入口为“App.vue”,其他所有的内容都是vue组件，通过vue路由实现的页面跳转实际上是组件之间的跳转。

如果在“App.vue”的路由<router-view />外部写入html代码，则在跳转之后依然能看到那些html内容。

根据这个的原理，在组件Home.vue中添加一个路由，就可以实现导航栏不变点击导航栏改变网页中间区域内容的功能了。



## 问题与解决方法

问题1：使用npm安装vue包总是报错；

解决方法：使用管理员权限打开cmd窗口。

 

问题2：axios发起请求后，无法在内部调用方法外面的对象this.jokes。

原因：使用this.$axios发起请求后，this指向的内容会发生改变；

解决方法：声明一个变量“var that = this”,保存this，当this发生改变以后，还可以用that获取之前this所指向的对象。

 

问题3：在批量注册路由时，使用懒加载的方式添加组件需要使用字符串模板$()，但是我使用的'@/components/${sub.componentName}'却失效了。

原因：字符串模板中的内容不能用单引号包围,而要用反单引号“`”

解决方法：将’@/components/${sub.componentName}’替换为`@/components/${sub.componentName}`



## 收获

vue框架是一个对html、css、javascript的整合，使用vue进行网页开发简化页面设计，但同时也带来了许多问题，它的页面跳转方式，组件的概念以及新的模板语法都和传统的html网页设计有很大的不同，所以做的过程中需要重新掌握的知识有很多。

好在vue官方提供了很好的学习文档，一边学一边完成期末项目，也接触了许多新的东西，比如安装node，安装npm，安装axios，不懂的地方有很多，所以需要查阅了许多资料，而学习vue时使用的东西也反过来加深了我对JavaScript的掌握，比如路由懒加载中使用了“()=>”这样奇怪的语法，它叫做箭头函数，相当于匿名函数。

其实最初做这个期末项目时是准备实现一个Vue前端+Springboot后端的网站的，但是这两个框架技术对我来说都是一个全新的东西，vue的学习花费了超出预期的时间，所以用Axios实现了一个发起网页请求获得笑话的功能，并没有用到数据库。



# Vue学习笔记

**记得在 `cmd` 管理员模式下使用 `npm`**

https://vuejs.org/v2/guide/

## 安装

### vue环境搭建

https://www.jianshu.com/p/cf70a7fa04c7

https://www.runoob.com/w3cnote/vue2-start-coding.html



## 创建

### 根据模板创建项目

> vue init webpack-simple 工程名字<工程名字不能用中文>
> 或者创建 vue1.0 的项目
> vue init webpack-simple#1.0 工程名字<工程名字不能用中文>

```
npm config set prefix "D:\development\nodejs\node_global"
npm config set cache "D:\development\nodejs\node_cache"
## 查看本地仓库
npm list -global
## 查看所有配置信息
npm config list
```

```
npm config set registry https://registry.npm.taobao.org
## 查看设置的国内镜像对不对
npm config get registry
## 安装vue.js到全局
npm install vue -g
```



## 语法示例

### 文本显示

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```



## 指令

### 属性绑定

#### v-bind

**鼠标悬浮**

```html
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
```

### 条件与循环

#### 



#### v-if

```html
<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

在JavaScript控制台将`app3.seen`修改为`false`，可以看到文本消失。

#### v-for

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
```

在控制台输入`app4.todos.pop()`和`app4.todos.push('something new')`可以修改文本列表。



### 交互

#### v-on

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

点击按钮将文本反转。

## 懒加载

[vue路由懒加载及组件懒加载 - z_xun - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiaoxiaoxun/p/11001884.html)

## 模板字符串

[字符串模板${}失效_weixin_30767921的博客-CSDN博客](https://blog.csdn.net/weixin_30767921/article/details/95232691)

```js
`@/components/${sub.componentName}`
// 错误用法
'@/components/${sub.componentName}'
```

## 页面设计-美化

* element-ui

  [Vue + Vue-router + Element-ui 搭建一个非常简单的dashboard demo - SegmentFault 思否](https://segmentfault.com/a/1190000012015667)

## 模块

**需要进入vue项目所在目录，并且是cmd管理员模式**

## router

[安装 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/installation.html)

* npm

```bash
npm install vue-router
```

* 已创建项目

```bash
npm install vue-router --save
```



### 重定向

```js
   {
        path: '/',
        redirect: '/home' //重定向
    },
```



### 多路由

```js
    {
        path: '/',
        name: 'RouterTest',
        meta: { title: 'Test' },
        components: {
            default: () =>
                import ('@/components/MyLogin'),
            home: () =>
                import ('@/components/Home')

        }

    }
```





## element

[组件 | Element](https://element.eleme.cn/#/zh-CN/component/installation)



* npm安装

`npm i element-ui -S`

* 对于已经创建的项目

```npm install --save element-ui```

## axios

[使用 axios 访问 API — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

> axios回调函数中的`this`值会改变，应该声明一个变量保存它`var that = this`

*使用示例：*

```js
      this.$axios
        .get("https://autumnfish.cn/api/joke/list?num=6")
        .then((response) => {
          var that = this; //将指向vue对象的this赋值给外部方法定义的属性，然后在内部方法中使用该属性
          // 否则this指向的内容会变，无法修改this.jokes的内容

          that.jokes = response.data.jokes;
          // console.log("jokes", this.jokes);
        })
        .catch((error) => {
          console.log(error);
          alert("网络错误，不能访问");
        });
```



## vue与springboot连接

[Springboot Vue Login(从零开始实现Springboot+Vue登录)_XiaoJL博客-CSDN博客_springboot vue](https://blog.csdn.net/xiaojinlai123/article/details/90694372)

