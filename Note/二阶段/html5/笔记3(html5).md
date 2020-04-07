# 上课笔记

### html5

+ 文件多选
```javascript
    <input multiple type="file">
    if(this.files[i].type.indexOf("image")!=-1){

    }
```

+ 拖拽
```
    <div draggable="true"></div>
    <p></p>
    事件：
        div.ondragstart:开始拖拽
            兼容火狐浏览器:
            div.ondragstart=function(){
                e.dataTransfer.setData("imgInfo","item");
            }

        div.ondrag:正在拖拽
        div.ondragend:结束拖拽

        p.ondragenter:移入目标元素
        p.ondragover:在目标元素中移动
        p.ondragleave:离开目标元素
        p.ondrop:在目标元素中松开鼠标
            要想触发ondrop，需要在ondragover时改变浏览器的默认行为：
            p.ondragover=function(e){
                e.preventDefault();
            }
    实例：
    <p draggable="true">哈哈哈</p>
    <div class="box"></div>
    <img id="img" src="/Users/mzs/Documents/web/HTML5/day03/img/下载 (1).jpeg" alt="" srcset="">
    <script>
    var obj = {
    name: 'mzj'
    }
    var p = document.getElementsByTagName('p')[0]
    var box = document.getElementsByClassName('box')[0]
    
    p.ondragstart = function(e) {
    //console.log(e) //e指的是拖动的事件  这个事件有一个属性dataTransfer
    e.dataTransfer.setDragImage(img, 10, 10) //后边俩个数值是相对于图片的鼠标箭头的位置
    //参数1：图片元素   参数2：x值  参数2：y值
    console.log('开始拖动')
    e.dataTransfer.setData('name', 'mzj') //只能传字符串
    
    }
    // p.ondrag = function() {
    //     console.log('正在拖动')
    //}
    // p.ondragend = function() {
    //   console.log('拖动结束')
    // }
    box.ondragenter = function() {
    console.log('有拖动元素进来了')
    }
    box.ondragleave = function() {
    console.log('拖动元素外出')
    }
    box.ondragover = function(e) {
    e.preventDefault(); //阻止浏览器的默认行为
    console.log('在目标元素上拖动')
    }
    box.ondrop = function(e) {
    console.log(e.dataTransfer.getData('name', JSON.stringify(obj))) //只能传字符串
    console.log(e) //也是拖动事件
    console.log('在目标元素上结束拖拽')
    } //必须在dragover阻止浏览器的默认行为才能触发
    </script>
```

+ 从桌面向浏览器中拖入照片
```
<div id="box"> </div>
<script>
var oDiv = document.getElementById('box')
oDiv.ondragover = function(e) {
console.log(1)
e.preventDefault(); //阻止浏览器默认行为
}
oDiv.ondrop = function(e) {
e.preventDefault(); //防止在窗口打开图片
//console.log(e.dataTransfer)//文件列表
var fr = new FileReader()
fr.readAsDataURL(e.dataTransfer.files[0])


//文件读取完毕后触发
fr.onload = function() {

var img = document.createElement('img')
img.src = fr.result

oDiv.appendChild(img)
}
}
</script>

```



+ 字符串与JSON对象的转换
```javascript
1、字符串转JSON对象:严格要求字符串的形式
    var json = '[{"name":"snail","age":"18"}]';
    var x = JSON.parse(json);
2、JSON对象转字符串
    var y = JSON.stringify(x);
```

+ 补充(遍历对象的属性)

```javascript
    var obj={};
    for(var key in obj){
        console.log(obj[key])
    }
```
