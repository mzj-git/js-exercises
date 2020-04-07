# 上课笔记

### css3

+ 媒体查询
```html
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">

    width:device-width----必写
        设备宽度
    initial-scale:1.0----必写
        初始化缩放
    user-scalable:no----建议写
        用户是否可以缩放

    <style>
        /* 媒体类型
               screen、all、tv 
           横竖屏：orientation
               竖：portrait
               横：landscape
        */
        @media screen and (min-width:640px) and (max-width:719px){

        }
    </style>


    media="screen and (min-width:640px) and (max-width:719px)"可以放在link引css的标签中
```

+ 盒子模型
```css
    box-sizing:content-box(标准盒子模型)
        width:只是content的宽
    box-sizing:border-box(怪异盒子模型)
        width:content、padding、border的宽的和
```

+ 单位rem、em
```javascript
    1em == 父元素的字体大小
    rem移动端使用
    1rem == html字体大小
```

+ 自定义字体
```css
    <style>
        @font-face{
            font-family:"name";
            src:url("字体路径")
        }
        p{
            font-family:"name";//字体的名字
        }
    </style>
实例：
<style>
@font-face {
     font-family: mzj;
     src: url(/Users/mzs/Documents/web/CSS3/day02/a.TTF);
}

div {
    font-family: 'mzj';
}
```

+ 透明度
```css
    <style>
        div{
            width:200px;
            height:200px;
        1、
            background:red;
            opacity:0-1;
            /* 透明-不透明 */
        2、 background:transparent;透明 
        3、 background:rgba(0,0,0,0.5); 
        }
    </style>
```

+ 阴影
```css
    <style>
    1、盒子阴影：
        div{
            width:200px;
            height:200px;
            box-shadow:0px 0px 10px red;
        }
    2、文本阴影：
        div{
            width:200px;
            height:200px;
            text-shadow:0px 0px 10px red;
        }
    3、文本描边
        p{
            -webkit-text-stroke:1px red;
        }
    兼容问题：
        -webkit-(属性):谷歌;
           -moz-(属性):火狐;
             -o-(属性):欧朋;
            -ms-(属性):IE;
    </style>
    实例：
    div {
    width: 300px;
    height: 300px;
    background-color: red;
    position: relative;
    }
    
    div:hover {
    top: -1px;
    box-shadow: 0px 0px 10px #aaa;
    }∫
```

+ 超出部分...
```css
    <style>
        div{
            width:200px;
            height:200px;
            white-space:nowrap;
            /* 超出部分不换行 */
            overflow:hidden;
            /* 超出部分隐藏 */
            text-overflow:ellipsis;
            /* 超出部分... */
        }
    </style>
    实例：
    1.css部分：
    <style>
    div {
    height: 45px;
    width: 170px;
    border: 1px solid red;
    /*
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;*/
    /* 单行超出部分不换行*/
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /*多行隐藏*/
    }
    </style>
    2.html部分：
     <div>这是最好的时代，也是最差的时代，努力向前奔跑，是最好的时代，也是最差的时代，努力向前奔跑</div>
```

+ 渐变
```css
    <style>
    1、线性渐变
        div{
            width:200px;
            height:200px;
            background:-webkit-linear-gradient(方向（可以用top或者角度:0deg:左到右，90deg:下到上）,red,blue);
        }
    2、径向渐变
        div{
            width:200px;
            height:200px;
            background:-webkit-radial-gradient(center,red,blue);
        }
    </style>
    实例：
    div {
    width: 300px;
    height: 200px;
    border: 1px solid red;
    /* background-image: linear-gradient(to bottom right, red, blue, yellow);*/
    /* background-image: linear-gradient(90deg, red, blue, yellow);*/
    /*往哪个方向去就就找那个角度*/
    /* background-image: linear-gradient( red, blue, yellow);*/
    /*默认从上到下*/
    /* background-image: radial-gradient(red 35%, yellow 40%);/* 默认为椭圆*/
    background-image: radial-gradient(circle, red, yellow, green);
    /*设置为圆*/
    }
```

+ 选择器
```css
    <style>
        属性选择器
    </style>
```
