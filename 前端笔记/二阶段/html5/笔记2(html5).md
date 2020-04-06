# 上课笔记

### html5

+ html5新增的获取节点方法
```javascript
    document.querySelectorALL("标签/class/id")(得到的是类数组元素,得到是所有的)
    document.querySelector("标签/class/id")(只取第一个元素)

    document.getElementsByClassName也是html5后新增的，IE8以下不支持
```

+ video标签（只支持三种格式）
```html 
    <!--    
        controls：控件是否可见
        loop：是否循环播放
        autoplay：自动播放
        poster：设置视频的封面照片
    -->
    <video controls loop autoplay poster="封面地址">
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        <source src="movie.webm" type="video/webm">
        您的浏览器不支持video
    </video>

    可以通过DOM操作video:
    一、方法：
        play()播放、pause()暂停

    二、属性
        currentTime	设置或返回视频中的当前播放位置（以秒计）
        duration	返回当前视频的长度（以秒计）
        volume      音量
```

+ cookie
```javascript
    cookie只能存4kb大小
    sessionStorage能存5mb
        设置：sessionStorage.setItem("key","value");
        获取：sessionStorage.getItem("key");
        移除：sessionStorage.removeItem("key");
        清除：sessionStorage.clear();
    localStorage
        方法与sessionStorage相似

三者的异同
数据上的生命周期的不同
    Cookie 一般由服务器生成，可设置失效时间，如果在浏览器端生成cookie，默认是关闭后失效。

    localStorage 除非被永久清除，否则永久保存。

    sessionStorage 仅在当前会话会有效，关闭页面或浏览器后被清除

存放数据的大小不同
    Cookie 一般为4kb

    localStorage 和 sessionStorage 一般为5mb

与服务器端通信不同
    Cookie 每次都会携带HTTP头中，如果使用cookie保存过多数据会带来性能问题

    localStorage 和 sessionStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信。
```

+ 智能表单(表单类型)
```html
    邮件email
    <input type="email">
    地址url
    <input type="url">
    数字键盘tel
    <input type="tel">
    number
    <input type="number">
    清除search
    <input type="search">
    颜色color
    <input type="color">
    滑杆range
    <input type="range" max="10" min="0" step="1">
    日期date
    <input type="date">
    month
    <input type="month">
    文件
    <input multiple type="file">
        应用：重要
        <script>
            var ipt = document.querySelector("input");
            var box = document.getElementById("box");
            ipt.onchange=function(){
                console.log(this.files);
                var file = new FileReader();
                file.readAsDataURL(this.files[0]);//选择图片
                //file.readAsText(this.files[0]);//选择文本
                file.onload=function(e){
                    var img = document.createElement("img");
                    img.src = e.target.result;
                    box.appendChild(img);
                }
            }
        </script>

    <a href="tel:10086"></a>
```

+ 智能表单(表单属性)
```html
    name:属性值;
    value:属性值;
    required:必填项;
    placeholder:占位文字;
    autofocus:自动聚焦;
    disabled:不可修改，只读;
    pattern:类似正则;
```



+ 补充
```html
    选择器.style.cssText="css样式写法(可以一直加)"
        等同于：
    选择器.style.backgroundColor="red"  
```
