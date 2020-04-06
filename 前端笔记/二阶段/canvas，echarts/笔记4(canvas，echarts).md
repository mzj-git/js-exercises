# 上课笔记

### html5

+ canvas
```html
应用场景：
    1、绘图2D/3D
        像素图(放大失真)/矢量图(放大不失真)
    2、游戏(可以调用GPU加速)
    3、图形可视化
    4、图像处理    

        <!-- canvas的width默认为300、height默认为150 -->
    <canvas width="800" height="600" style="border:solid">
        您的浏览器不支持canvas
    </canvas>

    <script>
        var canvas = document.querySelector("canvas");
        var cvs = canvas.getContext("2d");// 声明为2D画布

        cvs.strokeStyle="#f00";// 描边的颜色
        cvs.lineWidth="10"; // 线的宽度
        cvs.lineCap ="round" // 线段两端的样式
        cvs.lineJoin="round" // 线段连接段的样式

        cvs.moveTo(100,100); // 起点
        cvs.lineTo(300,300); // 终点或者转折点
        cvs.lineTo(500,100);
        cvs.stroke();        // 画线
        
        cvs.beginPath(); // 重新画线
        cvs.strokeStyle="#ff0";
        cvs.moveTo(100,200);
        cvs.lineTo(300,400); 
        cvs.lineTo(500,200);
        cvs.stroke();    
    </script>
```

+ 绘制图形
```javascript
1、矩形
    cvs.fillStyle="#f00";
    cvs.rect(50,50,100,200);//起点、终点、宽、高
    cvs.stroke(); // 描边
    cvs.fill(); //填充
    或者：
    cvs.strokeRect(50,50,100,200);
    cvs.fillStyle="#f00";
    cvs.fillRect(50,50,100,200);

2、圆形
    cvs.beginPath();
    cvs.arc(100,100,50,0.5*Math.PI,1.5*Math.PI,true)
    // 圆心、圆心、半径、起点、终点、逆时针
    cvs.closePath();
    cvs.stroke();

3、二次曲线
    cvs.moveTo(100,100);   //起点
    cvs.quadraticCurveTo(300,100,500,100); // 控制点、终点

4、贝塞尔曲线
    cvs.moveTo(100,100);   //起点
    cvs.bezierCurveTo(200,200,400,200，500,100); // 控制点、控制点、终点

5、圆角矩形
    <canvas width="800" height="600" style="border:solid"></canvas>
        
        var canvas = document.querySelector("canvas");
        var cvs = canvas.getContext("2d");
        
        cvs.beginPath();
        cvs.moveTo(100,100);
        cvs.lineTo(300,100);
        cvs.arcTo(350,100,350,150,50);
        cvs.lineTo(350,350);
        cvs.arcTo(350,400,300,400,50);
        cvs.lineTo(100,400);
        cvs.arcTo(50,400,50,350,50);
        cvs.lineTo(50,150);
        cvs.arcTo(50,100,100,100,50);
        cvs.closePath();
        cvs.stroke();
```

+ 绘制文字
```javascript
    <canvas style="border: solid" width="600" height="800"></canvas>

        var canvas = document.querySelector('canvas');
        var cvs = canvas.getContext('2d');

        cvs.font = '60px 微软雅黑';
        cvs.fillText('snail',100,100);
        cvs.strokeText('snail',200,300);

```

+ 绘制图片
```javascript
    <canvas width="600" height="400" style="border: solid"></canvas>

        var canvas = document.querySelector('canvas');
        var cvs = canvas.getContext('2d');

        var img = new Image();
        img.src = 'img/p_0.jpg';
        img.onload = function(){
            cvs.drawImage(this,0,0,600,400);
        }

        drawImage(imgElem,x,y);
        // 图像、在画布的x y坐标
        drawImage(imgElem,x,y,w,h);
        // 图像、在画布的x y坐标 宽度、高度
        drawImage(imgElem,sx,sy,sw,sh,x,y,w,h);
        // 图像、图片剪切的x y坐标，剪切的宽度、高度、在画布的x y坐标 宽度、高度
```

+ 全局组合
```javascript
    cvs.globalCompositeOperation = 'source-over';
    cvs.beginPath();

    source-over	
        默认。在目标图像上显示源图像。
    source-atop	
        在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
    source-in	
        在目标图像中显示源图像。只有目标图像之内的源图像部分会显示，目标图像是透明的。
    source-out	
        在目标图像之外显示源图像。只有目标图像之外的源图像部分会显示，目标图像是透明的。
    destination-over	
        在源图像上显示目标图像。
    destination-atop	
        在源图像顶部显示目标图像。目标图像位于源图像之外的部分是不可见的。
    destination-in	
        在源图像中显示目标图像。只有源图像之内的目标图像部分会被显示，源图像是透明的。
    destination-out	
        在源图像之外显示目标图像。只有源图像之外的目标图像部分会被显示，源图像是透明的。
    lighter	
        显示源图像 + 目标图像。
    copy	
        显示源图像。忽略目标图像。
    xor	
        使用异或操作对源图像与目标图像进行组合。
```

+ 刮刮乐
```javascript
    <canvas style="border:1px solid #ccc"></canvas>

        var arr = ["img/p_0.jpg","img/p_1.jpg"];
        var num = Math.round(Math.random());
        var canvas = document.querySelector("canvas");
        var cvs = canvas.getContext("2d");
        canvas.style.background="url("+arr[num]+")";

        cvs.fillStyle="#ccc";
        cvs.fillRect(0,0,canvas.width,canvas.height);

        cvs.globalCompositeOperation='destination-out';

        document.documentElement.onmousedown=function(e){
            cvs.beginPath();
            cvs.fillStyle="#f00";
            cvs.arc(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop,20,0,2*Math.PI);
            cvs.fill();

            document.documentElement.onmousemove=function(e){
                cvs.beginPath();
                cvs.fillStyle="#f00";
                cvs.arc(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop,20,0,2*Math.PI);
                cvs.fill();
            }
            document.documentElement.onmouseup=function(){
                document.documentElement.onmousemove=null;
                document.documentElement.onmouseup=null;
            }
        }
```

+ echarts
```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>ECharts</title>
            <!-- 引入 echarts.js -->
            <script src="echarts.min.js"></script>
        </head>
        <body>
            <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
            <div id="main" style="width: 600px;height:400px;"></div>
            <script type="text/javascript">
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            </script>
        </body>
    </html>
```
