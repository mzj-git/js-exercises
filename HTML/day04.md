## 划分区域
1.块元素(block)：	<br>独占整行，可以改变宽高（p,div,h1-h6,ul,li）
 宽：100%    高：自身内容的高度<br>
2.内联元素|行内元素(inlinr)：<br>不独占整行，不能改变宽度（span，a）
 宽：自身内容的宽度  高：自身内容的高度<br> 3.内联块元素|行内块元素（inline-block）：<br>不独占整行，可以改变宽高（img，input，button）
                    宽：自身内容的宽度 高：自身内容的高度（均可以修改）
————————————————————————-
## 代码设置颜色
1. css 层叠样式表
2. css的俩大组成部分 选择器，表达式。
        随着界面越写越多，我们发现有的样式，整个网站都适用的。
        如果还有style标签去写，每个网站都要去写一部分重复样式，
        那么解决办法，能不能有部分样式，是整个网站通用。
        css文件 把公共样式提取到css文件中，
 文件后缀名就是css。								
3. 总结<br>
 1.style属性 <br>
 ```<P style="color: red;">我是p标签</P> ```
 2.style标签 <br> 
```<head>
            <style>
                p{color:red;}
            </style>
        </head>```
 3.css文件
          css文件 把公共样式提取到css文件中，
        文件后缀名就是css<br>  ```<link rel="stylesheet"href="文件地址"/> ```

<>## color设置字体颜色#

在color设置字体颜色之前，我们首先了解color在CSS中有几种取值方式，一共有3种方式，3种方式如下：
 英文单词、十六进制、rgb和rgba
 <P style="color: red;">我是p标签</P>
    <p style="color: #ff0000;">red</p>
    <p style="color: #aabbcc;">灰</p>
    <p style="color: rgb(00,255,00);">hhh</p>
    <p style="color: rgba(00,255,00, 0.5);">hhh</p>
    ```<P style="color: red;">我是p标签</P>
    <p style="color: #ff0000;">red</p>
    <p style="color: #aabbcc;">灰</p>
    <p style="color: rgb(00,255,00);">hhh</p>
    <p style="color: rgba(00,255,00, 0.5);">hhh</p>  ```      
