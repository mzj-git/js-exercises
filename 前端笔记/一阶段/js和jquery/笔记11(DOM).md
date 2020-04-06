# 上课笔记

+ DOM
```js
document object model(文档对象模型)
    生成节点树：
        标签节点，文本节点，属性节点

    通过修改 DOM节点达到修改HTML的目的
    
    获取节点（属性）、修改节点(属性值、文字、节点的样式)、删除节点、新增节点

事件：
    点击事件：onclick="方法"
    双击事件：ondblclick="方法"     
    鼠标按下：onmousedown="方法"
    鼠标抬起：onmouseup="方法"
    鼠标移入：onmouseover="方法"
    鼠标移出：onmouseout="方法"
    鼠标移到：onmousemove="方法"
    键盘按下：onkeydown="方法"
    键盘松开：onkeyup="方法"

    js通过操作节点树操作网页
    
获取节点：
    1、通过id获取：(获取到一个元素 )
    document.getElementById("id值")  
    2、通过class获取：(获取到的是类数组元素，需要用[i]获取单个)
    document.getElementsByClassName("class值")
    3、通过标签名称获取：(获取到的是类数组元素，需要用[i]获取单个)
    document.getElementsByTagName("标签吗")

获取元素的属性： 
    获取节点后.type/src/value

****this关键字
```
