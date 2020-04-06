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

    <time></time>
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
    
```
