# 上课笔记

### html5

+ 文件多选
```javascript
    <input multiple type="file">
    if(this.files[i].type.indexOf("image")!=-1){

    }
```

+ 拖拽
```javascript
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
```

+ 从桌面向浏览器中拖入照片
```javascript
    <div id="box"></div>
    
    <script>
        var box = document.getElementById("box");
        box.ondragover=function(e){
            e.preventDefault();
        }
        box.ondrop=function(e){
            e.preventDefault();
            // console.log(e.dataTransfer.files)
            var file = new FileReader();
            file.readAsDataURL(e.dataTransfer.files[0]);
            
            file.onload=function(e){
                var img = new Image();
                img.src = e.target.result;
                img.width="500";
                box.appendChild(img);
            }
        }
    </script>
```

+ 自定义属性
```javascript
    <div id="one" data-name="123" data-name-big="234"></div>
    <script>
        var one = document.getElementById("one");
        one.getAttribute("data-name");
        one.getAttribute("data-name-big");
        one.dataset.name;
        one.dataset.nameBig;
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

+ 补充
```javascript
    var obj={};
    for(var key in obj){
        console.log(obj[key])
    }
```
