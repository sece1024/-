# 网页动画与三维网页制作
## 第一周
*编写一个校园网注册页面*

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