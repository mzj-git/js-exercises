# 上课笔记

### JS高级

+ this
```javascript
    1、事件调用的时候，谁调用指向谁
    2、全局作用域下（环境中）的this，指向window
    3、在对象中，通常指向对象本身
        在全局作用域下，定义的变量就是window的属性，定义的函数就是window的方法
    4、setTimeout()中的function(){}中的this指向window,不在function(){}中不指向window  ======>理解还是闭包中的this指向window（定时器里面的this指向window）
    5、闭包中的this指向window（函数中的this，谁调用的函数，this指向谁）
    6,自执行函数中的this指向window
    
改变this指向(重点)
    1、A.call(B)----------------A为方法、B为对象
        将A方法里的this指向B对象，B对象如果没有A方法、自动使用A方法
    2、call和apply
        方法使用完毕，自动执行A方法
        区别：
            A.call(B,1,2,3)
            A.apply(B,[1,2,3])
    3、A.bind(B)-----------A为方法、B为方法？？？
        B方法被A方法代替 绑定完不会自动执行

    call, apply, bind  
        为了改变this指向
        为了改变上下文context环境

    用法： 
        1. A方法.call(B对象,参数一,参数二,...)
        2.  A方法.apply(B对象,[参数一,参数二,...])
        3. bind
           A方法.bind(this指向的新对象, 参数一, 参数二, ...)
            返回的是个函数 不会自己执行 后边加 () 执行
               A方法.bind(this指向的新对象, 参数一, 参数二, ...)()
  实例： var obj = {
               name: 'mzj',
               sex: 'boy',
               age: '13'
               }
               var obj1 = {
               name: 'chai',
               sex: 'girl',
               age: '12',
               say: function(a, b) {
               console.log(this[a])
               console.log(this[b])
               }
               }
               obj1.say('name', 'sex')
               console.log(obj1.say.bind(obj, 'name', 'sex'))
               obj1.say.bind(obj, 'name', 'sex')()
```

+ 面向对象
```javascript
面向对象:
        OOP	(Object Oriented Programming)
        思想
    
    什么叫对象?
        对象是一个整体, 对外提供一些操作
        比如咱们的电脑, 收音机, 电视机		都可以看成对象
    
    什么是面向对象?
        使用对象时, 只关注其提供的功能, 不关注内部细节
    
    oop的特点:(封装, 继承, 多态)
        抽象: 抓住问题核心
        封装: 不考虑内部实现,只关注功能使用
        继承: 从已有对象上,继承出新的对象
        多态: 不同的对象,呈现不同的状态

     1、工厂模式: 不是传统设计模式中的工厂模式
        function animal(name, age, song) {
        // 原料:  实例化一个对象
            var obj = new Object();
        // 加工:  给对象添加属性与方法
            obj.name = name
            obj.age = age
            obj.song = song
            obj.sing = function () {
                console.log(this.song)
            }
        // 出厂:  把对象返回出去
            return obj;
        }
        var dog = animal('狗', 12, '汪汪汪')
        dog.sing()
        var duck = animal('鸭子', 5, '嘎嘎嘎')
        duck.sing()

        工厂模式缺点1: 不能判断类型
            a instanceof b   判断a是b的实例  如果是true  
            console.log(dog instanceof animal)  // false
        工厂模式缺点2: 同样的方法重复创建多次  浪费资源
            console.log(dog.sing === duck.sing) //false

    2、构造函数+原型模式
        // 为了区分普通函数和构造函数,构造函数的名称首字母大写
        function Animal(name,sex,age){
            this.name = name
            this.sex = sex 
            this.age= age
            this.say = function(){
                console.log(this.name)
            }
        }
        // 使用new关键字
        /*
            new 操作符做了什么:
            1. 创建了一个新对象
            2. 将构造函数的作用域赋给新对象(this指向了新对象)
            3. 执行构造函数的代码(给新对象添加属性,方法)
            4. 返回新对象
        */
        var obj1 = new Animal('snail',18,'man')
        var obj2 = new Animal('snail1',18,'man')
        console.log(obj1 instanceof Animal)  // true
        console.log(obj1.say === obj2.say)  // false

        Animal.prototype.sayName = function(){
            console.log(this.name)
        }
        console.log(obj1.sayName === obj2.sayName)  // true
```
