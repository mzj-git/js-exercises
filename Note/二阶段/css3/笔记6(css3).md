# 上课笔记

### css3

+ 弹性盒子模型(flex)
```css
    轴：主轴、侧轴
    容器(flex)、项目(子元素)

1、设置弹性盒子
    容器
        div{
            display:flex;
        }
        属性：
            1、(决定主轴方向：→,←,↓,↑)
                flex-direction:row/row-reverse/column/column-reverse
            2、(是否换行：不换、换、换-反转)    
                flex-wrap:nowrap/wrap/wrap-reverse
            3、(flex-direction和flex-wrap的简写，两个属性值)    
                flex-flow:上面两种的结合
            4、(项目在主轴上的对齐方式：左、右、中、两端、两端)   
                justify-content:flex-start/flex-end/center/space-between/space-around
            5、(项目在侧轴上的对齐方式：上、下、中、第一行文本的基线、高度为父元素的高度)   
                align-items:flex-start/flex-end/center/baseline/stretch(默认)
    项目：
        p{
            flex:1;
        }
        属性：
            1、定义项目的排序顺序，数值越小，排序越靠前
                order:1;
            2、定义项目的放大比例
                flex-grow
            3、定义项目的缩放比例
                flex-shrink
            4、定义了在分配多余空间前，项目占据的主轴空间
                flex-basis
            5、
                flex
            6、定义了单个项目与其他项目不同的对齐方式
            align-self:flex-start/flex-end/center
        实例：
        1.css部分：
        <style>
        .box-one {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        
        .num {
        margin: 8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: black;
        }
        
        .box-two {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        }
        
        #two {
        align-self: flex-end;
        }
        
        .box-three {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        }
        
        .three {
        align-self: center;
        }
        
        #three {
        align-self: flex-end;
        }
        
        .box-four {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }
        
        .box-four div {
        display: flex;
        justify-content: space-between;
        }
        
        .box-five {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }
        
        .five {
        align-self: center;
        }
        
        .box-five div {
        display: flex;
        justify-content: space-between;
        }
        
        .box-six {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        }
        
        .box-six div {
        display: flex;
        justify-content: space-between;
        }
        2.html部分
        <div class="box-one">
        <div class="num"></div>
        </div>
        <div class="box-two">
        <div class="num"></div>
        <div class="num" id="two"></div>
        </div>
        <div class="box-three">
        <div class="num"></div>
        <div class="num three"></div>
        <div class="num" id="three"></div>
        </div>
        <div class="box-four">
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        
        </div>
        <div class="box-five">
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        <div class="five">
        <div class="num"></div>
        </div>
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        </div>
        <div class="box-six">
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        <div>
        <div class="num"></div>
        <div class="num"></div>
        </div>
        </div>
        
```

+ transform变形
```css
    div{
        width:200px;
        height:200px;
        background:red;
    1、移动    
        transform:translate(x的值(必填),y的值);
        /* x、y的值可以为像素和百分比，百分比相对自身宽度
            应用：div的垂直居中对齐
            <style>
            div {
            width: 200px;
            height: 200px;
            background-color: red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            }
            </style>
            translateX()、translateY()
        */
    2、旋转
        transform-origin:0 0;
        /* 指定旋转基点 */

        transform:rotate(45deg);
        /* 单位deg 以中心点为圆心顺时针旋转 
            rotateX()、rotateY()、rotateZ()
            rotate3D(1,0,0,45deg)
        */       
    3、缩放
        transform:scale(倍数);
        /* scale(x,y)
            x、y的缩放倍数
        */
    4、斜切
        transform:skew();
        /* skew(x,y)x,y的角度
            skewX()、skewY()
        */
    }
    实例：(文件夹样式)
    1.css部分
    .box {
    width: 250px;
    height: 300px;
    position: relative;
    background-color: khaki;
    border: 1px solid grey;
    }
    
    .box .box-one {
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: white;
    top: -50px;
    right: -50px;
    transform: rotate(45deg);
    }
    
    .box .box-two {
    width: 70px;
    height: 70px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    position: absolute;
    left: 180px;
    }
    2.html部分
    <div class="box">
      <div class="box-one"></div>
      <div class="box-two"></div>
    </div>
```

+ transition过度
```css
    div{
        transition:4个属性;
        /* 
        1、transition-property:规定应用过度的css属性的名，默认为all
            none/all/property
        2、transition-duration:定义过度效果花费的时间，默认为0
        3、transition-timing-function:规定过度效果的时间曲线，默认为ease
            linear:匀速
            ease:慢快慢
            ease-in:慢速开始
            ease-out:慢速结束
            ease-in-out:慢速开始和慢速结束
            cubic-bezier(n,n,n,n):n为0-1的值
        4、transition-delay:规定过渡效果从何时开始，默认为0
        */
    }
    div:hover{
        transform:scale(0.5);
    }
    
    实例：
    <style>
    div {
    width: 300px;
    height: 300px;
    background-color: red;
    transition: 1s all ease;
    /*transition-duration: 5s;
    /* transition-timing-function: ease;*/
    /*transition-delay: 2s;*/
    }
    
    div:hover {
    width: 500px;
    height: 600px;
    transform: rotate(90deg);
    }
    </style>
```

+ animation过度
```css
    div{
        animation:7个属性;
        /* 
        1、animation-name:规定动画的名称
        2、animation-duration:规定动画完成一个周期所花费的秒或毫秒，默认为0
        3、animation-timing-function:规定动画的速度曲线，默认为ease
            linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)
        4、animation-delay:规定动画何时开始，默认为0
        5、animation-iteration-count:规定动画播放的次数，默认为1
            infinite:无限次
        6、animation-direction:规定动画是否在下一周期逆向的播放，默认为normal
            normal:正常
            reverse:反向
            alternate:奇数次正向，偶数次反向
            alternate-reverse:奇数次反向，偶数次正向
            initial:
            inherit:
        7、animation-play-state:规定动画是否正在运行或者暂停，默认为running
            paused:暂停
            running:播放        
        */
    }
    @keyframes a{
        10%{
            状态;
        }
        ...
        100%{
            状态;
        }
    }
    实例：
    <style>
    div {
    width: 200px;
    height: 200px;
    background-color: red;
    animation: a 3s 5 alternate;
    }
    
    @keyframes a {
    10% {
    width: 200px;
    height: 200px;
    }
    100% {
    width: 400px;
    height: 500px;
    }
    }
    
    div:hover {
    animation-play-state: paused;
    }
```
