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
            font-family:"name";
        }
    </style>
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
```

+ 选择器
```css
    <style>
        属性选择器
    </style>
```
