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
6.扇形图
<canvas id="circle" width="400" height="300"></canvas>
<script type="text/javascript">
var color = ["#27255F", "#2F368F", "#3666B0"];
var data = [{
price: '100',
type: '吃饭'
}, {
price: '300',
type: '化妆品'
}, {
price: '1000',
type: '玩'
}]
function drawCircle() {
var canvas = document.getElementById("circle");
var ctx = canvas.getContext("2d");
var startPoint = 0;
for (var i = 0; i < data.length; i++) {
ctx.fillStyle = color[i];
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.arc(200, 150, 150, startPoint, startPoint + Math.PI * 2 * (data[i].price / 1400), false);
ctx.fill();
startPoint += Math.PI * 2 * (data[i].price / 1400);
}
}
drawCircle();
```


+ 刮刮乐
```
<canvas width="320" height="160" style="border: 1px solid red;"></canvas>
<script>
var canvas = document.getElementsByTagName('canvas')[0]
var ctx = canvas.getContext('2d')
var arr = ["/Users/mzs/Downloads/day04/img/p_0.jpg", "/Users/mzs/Downloads/day04/img/p_1.jpg"]
var i = Math.round(Math.random())
canvas.style.background = 'url(' + arr[i] + ')'
ctx.fillStyle = '#ccc'
ctx.fillRect(0, 0, 320, 160)
canvas.onmousedown = function(e) {
var e = e || window.event
drawArc(e, this)


canvas.onmousemove = function(e) {
var e = e || window.event
drawArc(e, this)
}
document.documentElement.onmouseup = function() {
canvas.onmousemove = null
}

}

function drawArc(e, _this) {

var x = e.clientX - _this.offsetLeft
var y = e.clientY - _this.offsetTop
ctx.globalCompositeOperation = 'destination-out'
ctx.beginPath()
ctx.fillStyle = '#fff'
ctx.arc(x, y, 10, 0, 2 * Math.PI, true)
ctx.fill()
ctx.closePath()
}
</script>
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
