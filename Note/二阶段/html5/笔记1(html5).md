# 上课笔记（二阶段）

### html5

+ 语义化标签
```html
    <header>头部
        <nav>导航
            <!-- <ul>
                <li></li>
            </ul> -->
        </nav>
    </header>
    <section>
        <article>文章<article>
        <aside>侧边栏</aside>
    </section>
    <footer>脚部</footer>

    <time>12:00  2020-3-13</time>
    <details>
        <summary>下三角</summary>
        <p>哈哈</p>
    </details>

    <figure>组合图片
        <img>
        <figcaption>图片说明</figcaption>
    </figure>
    
    <hgroup>标题组合</hgroup>

    <input type="text" list="list1">
    <datalist id="list1">
        <option></option>
    </datalist>

    <mark>标记（黄色背景）</mark>

    <progress max="100" value="20">进度条</progress>

    标准浏览器才能解析
    低版本需要引入html5shiv.js
    <!--[if lt IE 9]>
        <script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
    <![endif]-->
    
    标签语义化的好处：
    1.  HTML结构清晰
    2.  代码可读性较好
    3.  无障碍阅读
    4.  搜索引擎可以根据标签的语言确定上下文和权重问题
    5.  移动设备能够更完美的展现网页（对css支持较弱的设备）
    6.  便于团队维护和开发
    
    实例：
    1.css部分
    <style>
    * {
    padding: 0;
    margin: 0;
    }
    
    header {
    height: 50px;
    background-color: antiquewhite;
    }
    
    main {
    width: 80%;
    margin: 20px auto 70px;
    height: 1000px;
    background-color: blueviolet;
    }
    
    article {
    width: 60%;
    background-color: cadetblue;
    height: 1000px;
    float: left;
    }
    
    aside {
    width: 35%;
    float: right;
    height: 1000px;
    background-color: coral;
    }
    
    footer {
    height: 50px;
    background-color: cornflowerblue;
    position: fixed;
    bottom: 0;
    width: 100%;
    }
    2.html部分
    <header></header>
    <main>
    <article>
    文章主体
    </article>
    <aside>
    侧边栏 友情链接 秋天的一棵树
    </aside>
    </main>
    
    <footer></footer>
```
