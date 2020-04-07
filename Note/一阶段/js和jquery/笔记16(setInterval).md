# 上课笔记

+ 点名器
```js
1、不加条件无限执行
    var count = 0 ;
    var timer = setInterval(function(){
        count++;
        if(count>10){
            clearInterval(timer);
        }
    },1000)
2、只执行一次
    setTimeout(function(){
        console.log("执行");
    },5000)
```
