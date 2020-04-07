# 上课笔记

+ 日期对象
```js
    var date =  new Date();
```

+ History对象
```js
    不是构造方法，不能写成new History()，直接用
    history.back();
    history.forward();
    history.go(-1);
```
+ Navigator对象
```js
    可以判断手机类型等
```

+ Location对象
```js
    获取当前页面的地址（URL），并把浏览器重定向到新的页面
    location.href:返回当前页面的URL
```

+ Jquery库,选择器:
```js
    $("#myDiv"):根据给定的ID匹配一个元素.如果选择器中包含特殊字符，可以用两个斜杠转义.
    $(".myDiv"):根据给定的类匹配元素.
    $("div"):根据给定的元素名匹配所有元素.
    $("*"):找到每一个元素.
    $("div,span,p.myClass"):将每一个选择器匹配到的元素合并后一起返回。
        可以指定任意多个选择器，并将匹配到的元素合并到一个结果内。
    $("form input"):在给定的祖先元素下匹配所有的后代元素.
    $("form > input"):在给定的父元素下匹配所有的子元素.
    $("label + input"):匹配所有紧接在 prev 元素后的 next 元素.
    $("form ~ input"):匹配 prev 元素之后的所有 siblings 元素.
    $('li:first'):获取第一个元素.
    $('li:last'):获取最后个元素.
    $("tr:even"):匹配所有索引值为偶数的元素，从 0 开始计数.
    $("tr:odd"):匹配所有索引值为奇数的元素，从 0 开始计数.
    $("tr:eq(1)"):匹配一个给定索引值的元素.
    $("tr:gt(0)"):匹配所有大于给定索引值的元素.
    $("tr:lt(2)"):匹配所有小于给定索引值的元素.
    $("input:not(:checked)"):去除所有与给定选择器匹配的元素.

```
+ 文档处理:
```js
内部插入
    append(content|fn)
        向每个匹配的元素内部追加内容。
        这个操作与对指定的元素执行appendChild方法，将它们添加到文档中的情况类似。
    appendTo(content)
        把所有匹配的元素追加到另一个指定的元素元素集合中。
        实际上，使用这个方法是颠倒了常规的$(A).append(B)的操作，即不是把B追加到A中，而是把A追加到B中。
    prepend(content|fn)
        向每个匹配的元素内部前置内容。
        这是向所有匹配元素内部的开始处插入内容的最佳方式。
    prependTo(content) 
        把所有匹配的元素前置到另一个、指定的元素元素集合中。
        实际上，使用这个方法是颠倒了常规的$(A).prepend(B)的操作，即不是把B前置到A中，而是把A前置到B中。
外部插入
    after(content|fn)
        在每个匹配的元素之后插入内容。
    before(content|fn)
        在每个匹配的元素之前插入内容。
    insertAfter(content)
        把所有匹配的元素插入到另一个、指定的元素元素集合的后面。
        实际上，使用这个方法是颠倒了常规的$(A).after(B)的操作，即不是把B插入到A后面，而是把A插入到B后面。
    insertBefore(content)
        把所有匹配的元素插入到另一个、指定的元素元素集合的前面。
        实际上，使用这个方法是颠倒了常规的$(A).before(B)的操作，即不是把B插入到A前面，而是把A插入到B前面。
```
+ 效果
```js
基本
    show([s,[e],[fn]])
    hide([s,[e],[fn]])
    toggle([s],[e],[fn])
滑动
    slideDown([s],[e],[fn])
    slideUp([s,[e],[fn]])
    slideToggle([s],[e],[fn])
淡入淡出
    fadeIn([s],[e],[fn])
    fadeOut([s],[e],[fn])
    fadeTo([[s],o,[e],[fn]])
    fadeToggle([s,[e],[fn]])  
自定义
    animate(p,[s],[e],[fn])
    stop([c],[j])
    delay(d,[q])
    finish([queue])
```
