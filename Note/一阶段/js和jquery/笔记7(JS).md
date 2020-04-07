# 上课笔记

#### JS(轻量级、弱类型的脚本语言)
+ 基本组成
```js
ECMAScript DOM BOM
    ECMAScript是JS的标准
    JS是ECMAScript的实现
    ECMAScript是欧洲计算机制造商协会通过ECMA-262标准化的脚本程序设计语言。
    JavaScript 已经由 ECMA 通过 ECMAScript 实现语言的标准化。 

要放到<script></script>标签中
```

+ 作用
```js
1、前后端的数据交互
2、用户交互
3、效果
```

+ 变量
```js   
    var a = 1;
一、标识符的命名规则
    1、驼峰规则
    2、见名知意
    3、不能用关键字和保留字命名
```

+ 数据类型
```js
6种：
    1、数值型 number
    2、字符串 string(单引号、双引号都行)
    3、布尔类型 boolean(true/false)
    4、未定义 undefined(定义了变量，但未赋值)
    5、null
    6、类 object
```

+ 操作符
```java
一、一元操作符：+ - * / %
              += -= *= /= %=
    1、数值型+数值型=数值型
    2、数值型+字符串=字符串(拼接)
    3、数值型+boolean=数值型(true=1，false=0)
    4、字符串+boolean=字符串
    5、数值型+undefined=NaN(not a number)
   
    6、字符串(只有数字)-数值型=数值型
    7、字符串(有字母)-数值型=NaN
    8、字符串(只有数字)-boolean=数值型

二、比较运算符：> < >= <= != ==(只比内容) ===(都比数据类型、内容)

三、逻辑运算符：&& || ! !!
    1、A&&B：A和B同时为真，true
    2、A||B：A和B有一个为真，true
    3、！true：false
    4、两个感叹号只将对应有6个数据转换为boolean类型为假，其它为真
        0  false '' undefined null NaN(数值型)

四、三目运算符：A？B:C
    A为真：执行B
    A为假：执行C

```

+ 自增、自减
```js
    i++ 先用后加
    ++i 先加后用
    i-- 先用后减
    --i 先减后用
```

+ 补充(半透明)
```css
rgba(...a(0-1))
```
