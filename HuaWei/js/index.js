/*
 * 定义MainBannerImages数组
 */
let MainBannerImages = [
        "https://res.vmallres.com/pimages//pages/picImages/Iz7W3hRLHKpsmknJhPXN.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/TPCncl2RJtPp7EOisALb.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/gJE9Dw2Mu8IYmX7wGIZN.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/Wuc6htrpYAjkcSkbzaQY.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/FBTZIpSDClwTinLodsYR.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/9B2RNZGtUBDRZuH1poB0.jpg",
        "https://res.vmallres.com/pimages//pages/picImages/Wuc6htrpYAjkcSkbzaQY.jpg"
    ]
    /*
     * 定义头部关闭按钮
     */
let headerTopIcon = document.getElementsByClassName("top-banner-icon")[0];

// console.log(headerTopIcon);

headerTopIcon.onclick = function() {
    headerTopIcon.parentNode.parentNode.style.display = "none";
}

/*
 * 获取mainBanner元素节点
 */

let mainBanner = document.getElementsByClassName("main-banner")[0];

// console.log(mainBanner);

/*
 * 获取左侧点击按钮
 */
let mainBannerLeft = document.getElementsByClassName("slider-btn-left")[0];


let mainBannerRight = document.getElementsByClassName("slider-btn-right")[0];

/*轮播处理*/
var index = 0;
let sliderNav = document.getElementsByClassName("slider-nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
// console.log(sliderNav);
var start = null;
/*
 *  初始化定时器为空， 使其在全局作用域使用
 */


function lunbo() {
    start = setInterval(function() {
        if (index >= 0 && index <= 7) {
            index++;
            if (index == 7) {
                index = 0;
            }
        }

        mainBanner.style.backgroundImage = "url(" + MainBannerImages[index] + ")";
        for (let i = 0; i < 7; i++) {
            sliderNav[i].style.backgroundColor = "";
        }
        sliderNav[index].style.backgroundColor = "#FFFFFF";

    }, 2000);

    /*
     * nav的移动事件
     */
    for (let j = 0; j < 7; j++) {
        // console.log(1);
        sliderNav[j].onmouseover = function() {
            mainBanner.style.backgroundImage = "url(" + MainBannerImages[j] + ")";
            for (let i = 0; i < 7; i++) {
                sliderNav[i].style.backgroundColor = "";
            }

            sliderNav[j].style.backgroundColor = "#FFFFFF";
        }
    }
}
lunbo();

/*触发移动事件*/

mainBanner.onmouseover = function() {
    clearInterval(start);
}

/*鼠标移出事件*/
mainBanner.onmouseout = function() {
    clearInterval(start);
    lunbo();
}

/*
 * 左侧按钮点击事件
 */
mainBannerLeft.onclick = function() {
    if (index >= 0 && index <= 7) {
        if (index == 0) {
            index = 7;
        }
        index--;
    }

    mainBanner.style.backgroundImage = "url(" + MainBannerImages[index] + ")";
    for (let i = 0; i < 7; i++) {
        sliderNav[i].style.backgroundColor = "";
    }

    sliderNav[index].style.backgroundColor = "#FFFFFF";
}

/*
 * 右侧按钮点击事件
 */
mainBannerRight.onclick = function() {
    if (index >= 0 && index <= 7) {
        index++;
        if (index == 7) {
            index = 0;
        }
    }
    mainBanner.style.backgroundImage = "url(" + MainBannerImages[index] + ")";
    for (let i = 0; i < 7; i++) {
        sliderNav[i].style.backgroundColor = "";
    }

    sliderNav[index].style.backgroundColor = "#FFFFFF";
}




/*第二个滚动的实现*/

var index2 = 0;
let MainContainerImages = [
    "./images/main-container-3-1.jpg",
    "./images/main-container-3-2.png",
    "./images/main-container-3-3.jpg",
    "./images/main-container-3-4.jpg",
    "./images/main-container-3-5.jpg",
    "./images/main-container-3-6.jpg",
    "./images/main-container-3-7.jpg"
]

let MainContainer4 = document.getElementsByClassName("main-container-4-lunbo")[0];
let ContentNav = document.getElementsByClassName("content-nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");


function lunbo2() {
    start = setInterval(function() {
        // console.log(1);
        if (index2 >= 0 && index2 <= 7) {
            index2++;
            if (index2 == 7) {
                index2 = 0;
            }
        }

        document.getElementsByClassName("main-container-4-lunbo")[0].src = MainContainerImages[index2];

        for (let i = 0; i < 7; i++) {
            ContentNav[i].style.backgroundColor = "";
        }

        ContentNav[index2].style.backgroundColor = "#FFFFFF";

    }, 2000);

    /*
     * nav的移动事件
     */
    for (let j = 0; j < 7; j++) {
        // console.log(1);
        ContentNav[j].onmouseover = function() {
            // console.log(1);
            document.getElementsByClassName("main-container-4-lunbo")[0].src = MainContainerImages[j];
            for (let i = 0; i < 7; i++) {
                ContentNav[i].style.backgroundColor = "";
            }

            ContentNav[j].style.backgroundColor = "#FFFFFF";
        }
    }
}

lunbo2();

/*触发移动事件*/

MainContainer4.onmouseover = function() {
    clearInterval(start);
}

/*鼠标移出事件*/
MainContainer4.onmouseout = function() {
    clearInterval(start);
    lunbo2();
}




/*滑动的实现*/
GridBtnRight = document.getElementsByClassName("grid-btn-right")[0];
GridBtnLeft = document.getElementsByClassName("grid-btn-left")[0];
GridList = document.getElementsByClassName("grid-list")[0];

// document.getElementsByClassName("GridList").getElementsByTagName("ul").
// console.log(goodsContent);
var distance = 0;
GridBtnRight.onclick = function() {
    distance -= 1212;
    if (distance < -5000) {
        distance += 1212;
        return 0;
    }
    if (distance < 0) {
        GridBtnLeft.style.display = "block";
    }
    if (distance < -3635) {
        GridBtnRight.style.display = "none";
    }
    GridList.style.transform = "translateX(" + distance + "px)";
    console.log(distance);
}


// console.log(GridBtnLeft);

GridBtnLeft.onclick = function() {
    distance += 1212;
    if (distance < 5000) {
        distance -= 1212;
        // return 0;
    }
    if (distance > 0) {
        GridBtnRight.style.display = "block";
    }
    if (distance > 3635) {
        GridBtnLeft.style.display = "none";

    }
    GridList.style.transform = "translateX(" + distance + "px)";
    distance += 1212;
    console.log(distance);
}