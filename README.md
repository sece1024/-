# 网页动画与三维网页制作
## 第一周
*编写一个校园网注册页面*

## 第三周
*实现课本第五章的时钟代码，在此基础上做一定优化。*

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
   
   解决办法：清除分针和时针时，给它们的旋转角度也加上一个偏移量：`cxt.rotate((lm+ls/60)*Math.PI/30);`,`cxt.rotate((lh+lm/60)*Math.PI/6);`





---
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