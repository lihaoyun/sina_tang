/**
 * Created by HH on 2017/5/23.
 */
//轮播图
auto();
function  auto() {
    let lists = document.querySelectorAll('.carousel_list');//获取所有li
    /*let list = document.querySelector('.banner_list_carousel');*/
    let aes = document.querySelectorAll('.small_blue a');//获取所有a（小蓝点）
    //包裹器高度
    let bannerHeight = 0;
    for (let i = 0; i < lists.length; i++) {
        bannerHeight += lists[i].offsetHeight
    }
    //图片高度
    let listHeight = lists[0].offsetHeight;
    //定义偏移量
    let top = 0;
    //图片索引
    let now = 0;
    lists[0].style.opacity = 1;
    //开启定时器
    let timer = setInterval(fun,3000);
    //定义延时定时器
    let outer;
    function fun() {
        top += listHeight;
        //判断 索引
        if(now > lists.length - 1){
            now = 0
        }
        //判断 偏移量
        if (top>bannerHeight - listHeight){
            top = 0
        }
        //消失效果
        lists[now].style.opacity = 0;
        //消失效果结束之后进入延时调用
        outer = setTimeout(function () {
            //移动
            lists[0].style.marginTop = -top + 'px';
            //清空小蓝点的class
            for (let j = 0; j < aes.length; j++) {
                aes[j].className = '';
            }

            if(now + 1 > lists.length - 1){
                now = -1
            }
            //显示效果
            aes[now+1].className = 'col';
            lists[now+1].style.opacity = 1;

            now++

        },800)

    }


    //定义一个变量来监听点击效果是否在执行，在执行的情况下禁止再点击
    let load = true;
    //小蓝点点击切换效果
    for (let j = 0; j < aes.length; j++) {
        aes[j].onclick = function () {
            //关闭定时器和延时定时器
            clearTimeout(outer);
            clearInterval(timer);
            //判断点击回调是否在执行
            if(!load){
                 return
            }
            load = false;
            for (let i = 0; i < aes.length; i++) {
                lists[i].style.opacity = 0;
                aes[i].className = '';
            }
            setTimeout(function () {
                aes[j].className = 'col';
                lists[j].style.opacity = 1;
                top = lists[0].offsetHeight*j;
                now = j;
                lists[0].style.marginTop = -top + 'px';
            },800);
            //过渡效果执行完毕，开启定时器，重置load为true
            setTimeout(function () {
                timer = setInterval(fun,3000);
                load = true
            },2000)
        }

    }


}

//头部二级菜单
menu();
function menu() {
    let navLink = document.querySelectorAll('.nav_link_1');
    let navMoreLayer = document.querySelectorAll('.nav_more_layer');
    //
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].onmouseover = function () {
            navMoreLayer[i].style.display = 'block'
        };
        navLink[i].onmouseout = function () {
            navMoreLayer[i].style.display = 'none'
        };
    }
    for (let j = 0; j < navMoreLayer.length; j++) {
        navMoreLayer[j].onmouseover = function () {
            navMoreLayer[j].style.display = 'block'
        };
        navMoreLayer[j].onmouseout = function () {
            navMoreLayer[j].style.display = 'none'
        };

    }

}

//底部页签切换
yeqian();
function yeqian() {
    let caseCoverImgs = document.querySelectorAll('.case_cover_img');
    let caseNameLinks = document.querySelectorAll('.case_name_link');
    let caseInfoBoxs = document.querySelectorAll('.case_info_box');

    for (let i = 0; i < caseInfoBoxs.length; i++) {
        caseInfoBoxs[i].style.display = 'none'
    }
    caseInfoBoxs[0].style.display = 'block';
    
    for (let j = 0; j < caseCoverImgs.length; j++) {
        caseCoverImgs[j].onmouseover = function () {
            for (let i = 0; i < caseInfoBoxs.length; i++) {
                caseInfoBoxs[i].style.display = 'none';
            }
            caseInfoBoxs[j].style.display = 'block';
        }

    }
    for (let j = 0; j < caseNameLinks.length; j++) {
        caseNameLinks[j].onmouseover = function () {
            for (let i = 0; i < caseInfoBoxs.length; i++) {
                caseInfoBoxs[i].style.display = 'none';
            }
            caseInfoBoxs[j].style.display = 'block';
        }

    }
}

