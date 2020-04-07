# 上课笔记

### html5

+ html5新增的获取节点方法
```
    document.querySelectorALL("标签/class/id")(得到的是类数组元素,得到是所有的)
    document.querySelector("标签/class/id")(只取第一个元素)
```

+ video标签（只支持三种格式）
```html 
    <!--    
        controls：控件是否可见
        <video src="/Users/mzs/Documents/web/HTML5/day02/src/movie.mp4" controls height="400px" width="600px" style="background-color: black;"></video>
        loop：是否循环播放
        autoplay：自动播放
        poster：设置视频的封面照片
        mmuted:静音播放
        source:资源的路径
        video：标签三种样式 MP4 ogg webm
        
    -->
    <video controls loop autoplay poster="封面地址">
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        <source src="movie.webm" type="video/webm">
        您的浏览器不支持video
    </video>
    实例：
    <video src="/Users/mzs/Documents/web/HTML5/day02/src/movie.mp4" controls autoplay></video>
    <video controls>
    
    
    <source src="/Users/mzs/Documents/web/HTML5/day02/src/movie.mp4" ></source>
    </video>

    可以通过DOM操作video:
    一、方法：
        play()播放、pause()暂停

    二、属性
        currentTime	设置或返回视频中的当前播放位置（以秒计）
        duration	返回当前视频的长度（以秒计）
        volume      音量
    实例：
    1.html部分
    <video src="/Users/mzs/Documents/web/HTML5/day02/src/movie.mp4" controls></video>
    <button onclick="play()">点击播放</button>
    <button onclick="pause()">点击暂停</button>
    <button onclick="kuaijin()">点击快进</button>
    <button onclick="muted()">点击静音</button>
    <button onclick="jiasu()">点击加速</button>
    <button onclick="jianxiao()">减小音量</button>
    <button onclick="xunhuanplay()">循环播放</button>
    2.js部分：
    <script>
    var video = document.getElementsByTagName('video')[0]
    function play() {
    video.controls = true //显示控件
    video.play() //播放 方法
    console.log(video.currentSrc) //播放地址
    console.log(video.duration) //播放总时长
    setInterval(function() {
    console.log(video.currentTime) //播放时间
    }, 3000)
    }
    
    function pause() {
    video.pause() //暂停 方法
    console.log(video.paused) //返回当前暂停的时间🔙
    }
    
    function kuaijin() {
    video.currentTime += 2 //加速
    }
    
    function muted() {
    video.muted = true //静音
    }
    
    function jiasu() { //加倍数
    video.playbackRate++
    }
    
    function jianxiao() { //控制音量
    if (video.volume >= 0.2) {
    video.volume -= 0.2
    }
    console.log(video.volume)
    }
    
    function xunhuanplay() { //循环播放
    video.loop = true
    }
    </script>
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
实例：（用 Cookie做一个登陆注册）
1.html部分：
<h1>登录，注册</h1>
<p>用户名：<input type="text" id="username" placeholder="请输入用户名"><br> </p>
<p>密码：&nbsp;&nbsp;&nbsp;<input type="password" id="password" placeholder="输入密码"><br></p>
<button id="login">登录</button>
<button id="regist">注册</button>
2.js部分
<script>
//对象
//var obj = {
//username: "a",
// password: "123"
// }
// console.log(obj.username);
//先获取所有用户的对象//变成数组
if (localStorage.userArr) { //判断是否存在
var array = JSON.parse(localStorage.userArr);
} else {
array = []; //创建一个新数组
}
//登录
document.getElementById('login').onclick = function() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var isHad = false; //定义一个开关变量
var index = 0; //定义一个下标确定用户
//遍历数组进行匹配
for (var i = 0; i < array.length; i++) {
if (username == array[i].username) { //有这个账号
isHad = true;
index = i;

}
}
if (isHad) { //如果存在
if (password == array[index].password) {
alert("登录成功");
} else {
alert("密码错误");
}
} else { //账号不存在或输入错误
alert('账号不存在或输入错误');
}
}

//注册
document.getElementById('regist').onclick = function() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
//遍历数组进行匹配
for (var i = 0; i < array.length; i++) {
//判断是否有相同账号
if (username == array[i].username) {
alert("该账号已存在");
return;
}
}
//创建对象
var obj = {
username: username,
password: password,

}
array.push(obj);
localStorage.userArr = JSON.stringify(array);
alert("用户创建成功");

}
</script>

```

+ 智能表单(表单类型)
```html
    邮件email
    <input type="email">//email(电子邮箱)
    地址url
    <input type="url">// url(url路径   网址)
    数字键盘tel
    <input type="tel">//普通的文本没什么不同
    number
    <input type="number">// number(数值)
    清除search
    <input type="search">//输入内容后  文本框右侧有个X按钮，单击后清空输入内容
    颜色color
    <input type="color">
    实例：
    <input type="color" id="color">
    <script>
    color.onchange = function() {
    console.log(color.value)
    }
    </script>
    
    滑杆range
    <input type="range" max="10" min="0" step="1">
    实例一：
    <input id="range" type="range" max="100" min="0" value="50" step="10">
    <h1 id="val">50</h1>
    <!--
    min-max 设置取值范围
    调节步长  step属性
    -->
    <script>
    range.oninput = function() {
    val.innerHTML = range.value
    }
    </script>
    实例二：<!-- 1. 上面是滑杆  下面是图片    滑动滑杆的时候，下面的图片等比例缩放-->
    1.css部分
    <style>
    .kuang {
    background-color: gray;
    width: 1000px;
    height: 1000px;
    margin: 0 auto;
    }
    
    input {
    width: 1000px;
    margin-left: 5px;
    }
    </style>
   2.html部分
    <h3>上面是滑杆 下面是图片 滑动滑杆的时候，下面的图片等比例缩放</h3>
    <div class="kuang">
    <input type="range" id="range" min="100" max="1000" step="100" value="500" oninput=" changesize()">
    <div>
    <img src="data:image/jpeg;base64,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"
    alt="" width="500" height="500">
    </div>
    </div>
    3.js部分
    <script>
    function changesize() {
    var range = document.getElementById('range')
    range.oninput = function() {
    w = range.value
    
    document.getElementsByTagName('img')[0].height = w
    
    document.getElementsByTagName('img')[0].width = w
    
    }
    }
    </script>
    
    
    日期date
    <input type="date">
    month
    <input type="month">
    实例：
    <form action="">
    <!-- <input type="email" placeholder="请输入邮箱" required> -->
    <!-- <input type="url" placeholder="请输入域名" required> -->
    <!-- <input type="number" placeholder="请输入年龄" required> -->
    <!-- <input type="tel" required> -->
    <!-- <input type="search" required> -->
    <input type="range">
    <!-- <input type="month"> -->
    <!-- <input type="date"> -->
    <!-- <input type="week"> -->
    <!-- <progress max='100' value="50"></progress> -->
    <button type="submit">提交</button>
    </form>
    
    
    文件
    <input multiple type="file">
        应用：重要
    实例：
        <input type='file'>
        <div id="box"></div>
        <script>
        var box = document.getElementById('div')
        var ipt = document.getElementsByTagName('input')
        //console.log(ipt[0])
        
        ipt[0].onchange = function() {
        
        //console.log(this.files)//文件列表
        //console.log(this.files[0]) //图片
        
        //文件阅读器
        var fr = new FileReader()
        fr.readAsDataURL(this.files[0])
        
        
        //文件读取完毕后触发
        fr.onload = function() {
        
        var img = document.createElement('img')
        img.src = fr.result
        img.height = "1000"
        document.body.appendChild(img)
        }
        }
        </script>
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
