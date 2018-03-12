/**
 * Created by mac on 2017/11/28.
 */
//返回顶部
var oBtn = document.getElementById('go-top');
oBtn.onclick = function(){
    oBtn.style.background = 'url("img/go-top.jpeg") -200px 3px no-repeat';
    var iScrollTop = document.documentElement.scrollTop ||  document.body.scrollTop;
    var timer = setInterval(function(){
        window.scrollTo(0,iScrollTop*=0.6);
        if(iScrollTop <= 1){
            clearInterval(timer);
            oBtn.style.background = 'url("img/go-top.jpeg") -22px 0 no-repeat';
            oBtn.onmouseover = function () {
                oBtn.style.background = 'url("img/go-top.jpeg") -113px 1px no-repeat';
            }
        }
    },50);
}
//返回顶部结束
//字体变色
var oQingfeng = document.getElementsByClassName('myshop')[0];
function changeColor(){
    var color="yellow|#2196f3|hotpink|#f00|#0f0";
    color=color.split("|");
    oQingfeng.style.color=color[parseInt(Math.random() * color.length)];
}
var timerChangeColor = setInterval("changeColor()",150);
oQingfeng.onmouseover = function () {
    clearInterval(timerChangeColor);
}
oQingfeng.onmouseout = function () {
    timerChangeColor = setInterval("changeColor()",150);
}
//字体变色结束
//购物车开始
var oSearchClick = document.getElementById('search-click');
var oSearchBox = document.getElementById('search-box');
var oSearchHot = document.getElementsByClassName('search-hot-words')[0];
var oSearchBtn = document.getElementsByClassName('search-btn')[0];

oSearchClick.onclick = function (e) {
    e = e || window.event;
    e.stopPropagation();
    e.cancelBubble = true;
    oSearch('block','none','#ff6700','#ff6700');
}
document.onclick = function () {
    oSearch('none','block','#e0e0e0','#e0e0e0');
}
function oSearch(dis1,dis2,col1,col2) {
    oSearchBox.style.display = dis1 ;
    oSearchHot.style.display = dis2 ;
    oSearchClick.style.borderColor = col1 ;
    oSearchBtn.style.borderColor = col2 ;
}
//购物车结束

//轮播图 定时移动
var oImgBox=document.getElementById('img-box');
var aImgBoxActive=oImgBox.getElementsByTagName('img');
var aImgBoxLi=oImgBox.getElementsByTagName('li');
var oNextBtn=document.getElementsByClassName('next-btn')[0];
var oPrevBtn=document.getElementsByClassName('prev-btn')[0];
var iNow=0;
var timer ;

for(var i=0; i<aImgBoxLi.length ;i++){
    aImgBoxLi[i].index = i ;
    aImgBoxLi[i].onclick = function () {
        changeImg(this.index);
        iNow=this.index;
    }
}
oNextBtn.onclick = function () {
    iNow++;
    if(iNow >= aImgBoxActive.length){
        iNow = 0 ;
    }
    changeImg(iNow);
}
oPrevBtn.onclick = function () {
    iNow--;
    if(iNow < 0){
        iNow = aImgBoxActive.length-1 ;
    }
    changeImg(iNow);
}
function changeImg(idx) {
    for(var j=0 ;j<aImgBoxActive.length ;j++){
        aImgBoxActive[j].className = '';
        aImgBoxLi[j].className = '';
    }
    aImgBoxActive[idx].className ='img-box-active';
    aImgBoxLi[idx].className ='btns-active';
    changeOpacity(aImgBoxActive,idx-1,idx);
}
imgBoxRun();
oImgBox.onmouseover = function () {
    clearInterval(timer);
}
oImgBox.onmouseout = function () {
    imgBoxRun();
}
function imgBoxRun() {
    timer = setInterval( function () {
        oNextBtn.onclick();
    },2000)
}
function changeOpacity(arr,indexOne,indexTwo) {
    if(indexOne == -1){
        indexOne = 5;
        indexTwo = 0;
    }
    for(var i=0; i<arr.length ;i++){
        arr[i].style.display = 'none';
        arr[i].style.opacity = 0;
    }
    arr[indexOne].style.display = 'block';
    arr[indexOne].style.opacity = 1;
    arr[indexTwo].style.display = 'block';
    arr[indexTwo].style.opacity = 0;
    var timerOpacityOne = window.setInterval(function () {
        if(arr[indexOne].style.opacity >= 0.01){
            arr[indexOne].style.opacity *= 0.8;
        }else{
            arr[indexOne].style.display = 'none';
            window.clearInterval(timerOpacityOne);
        }
    },40);
    var opacity = 0.2;
    var timerOpacityTwo = window.setInterval(function () {
        if(arr[indexTwo].style.opacity <= 1){
            opacity *= 1.2;
            arr[indexTwo].style.opacity = opacity;
        }else{
            window.clearInterval(timerOpacityTwo);
        }
    },40)
}
//轮播图结束

//明星单品 为你推荐 开始
var aIconStarMore = document.getElementsByClassName('icon-more icon-star icon-star-one');
var aIconStarBack = document.getElementsByClassName('icon-back icon-star icon-star-one');
var aIconStarMoreAther = document.getElementsByClassName('icon-more icon-star icon-two');
var aIconStarBackAther = document.getElementsByClassName('icon-back icon-star icon-two');
var oProGroup = document.getElementsByClassName('pro-group')[0];
var oXmRecommendUl = document.getElementById('xm-recommend-ul');
var timerOne;
var flagOne = true, flagTwo = true, flagThree = true, flagFore = true;


for(var i=0 ;i<aIconStarMore.length ;i++){
    aIconStarMore[i].index = i;
    aIconStarMore[i].onclick = function () {
        this.className = 'iconfont icon-more icon-star icon-star-one';
        aIconStarBack[this.index].className = 'iconfont icon-back icon-star icon-star-one icon-star-active';

        if(oProGroup.offsetLeft > -1240 && flagOne){

            timerOne = setInterval(function () {
                flagOne = false;
                oProGroup.style.left = oProGroup.offsetLeft - 40 + 'px';
                if(oProGroup.offsetLeft <= -1240){
                    clearInterval(timerOne);
                    flagOne = true;
                }
            },10)
        }
    }
}
for(var i=0 ;i<aIconStarBack.length ;i++){
    aIconStarBack[i].index = i;
    aIconStarBack[i].onclick = function () {
        this.className = 'iconfont icon-back icon-star icon-star-one';
        aIconStarMore[this.index].className = 'iconfont icon-more icon-star icon-star-one icon-star-active';
        if(oProGroup.offsetLeft < 0 && flagTwo){
            var timerTwo = setInterval(function () {
                flagTwo = false;
                oProGroup.style.left = oProGroup.offsetLeft + 40 + 'px';
                if(oProGroup.offsetLeft >= 0){
                    clearInterval(timerTwo);
                    flagTwo = true;
                }
            },10)
        }
    }
}
for(var i=0 ;i<aIconStarMoreAther.length ;i++){
    aIconStarMoreAther[i].index = i;
    aIconStarMoreAther[i].onclick = function () {
        this.className = 'iconfont icon-more icon-star icon-two';
        aIconStarBackAther[this.index].className = 'iconfont icon-back icon-star icon-two icon-star-active';
        if(oXmRecommendUl.offsetLeft > -1240 && flagThree){
            var timerOne = setInterval(function () {
                flagThree = false;
                oXmRecommendUl.style.left = oXmRecommendUl.offsetLeft - 40 + 'px';
                if(oXmRecommendUl.offsetLeft <= -1240){
                    clearInterval(timerOne);
                    flagThree = true;
                }
            },10)
        }
    }
}
for(var i=0 ;i<aIconStarBackAther.length ;i++){
    aIconStarBackAther[i].index = i;
    aIconStarBackAther[i].onclick = function () {
        this.className = 'iconfont icon-back icon-star icon-two';
        aIconStarMoreAther[this.index].className = 'iconfont icon-more icon-star icon-two icon-star-active';
        if(oXmRecommendUl.offsetLeft < 0 && flagFore){
            var timerTwo = setInterval(function () {
                flagFore = false;
                oXmRecommendUl.style.left = oXmRecommendUl.offsetLeft + 40 + 'px';
                if(oXmRecommendUl.offsetLeft >= 0){
                    clearInterval(timerTwo);
                    flagFore = true;
                }
            },10)
        }
    }
}
//明星单品 为你推荐 结束

//家电选项卡 开始（家电模块后面都一样，暂时只加了家电一个模块）
var oHomeList = document.getElementById('home-list');
var aHomeListLi = oHomeList.getElementsByTagName('li');
var oHomeTv = document.getElementById('home-tv');
var aHomeTvUl = oHomeTv.getElementsByTagName('ul');
for(var i=0 ;i<aHomeListLi.length ;i++){
    aHomeListLi[i].index = i;
    aHomeListLi[i].onmouseover = function () {
        for(var j=0 ;j<aHomeListLi.length ;j++){
            aHomeListLi[j].className = 'active';
            aHomeTvUl[j].className = '';
        }
        this.className = 'active-active';
        aHomeTvUl[this.index].className = 'home-tv-active';
    }
}

//家电选项卡 结束

//内容轮播图开始（只有最左侧第一个加了，开始jQuery| go ahead! /*teacher is the most beautiful*/）
var oContentsBackOne =document.getElementById('contents-icon-back-one');
var oContentsMoreOne =document.getElementById('contents-icon-more-one');
var oCarousolBox = document.getElementsByClassName('carousol-box')[0];
var aPager = document.getElementsByClassName('pager-one');
var aDotOne = document.getElementsByClassName('dot-one');
var numOne = 0;

for(var i=0 ;i<aPager.length ;i++){
    aDotOne[i].index = i ;
    aDotOne[i].onclick = function () {
        numOne = this.index;
        runContents(this.index);
    }
}
function runContents(inumOne) {
    for(var j=0 ; j<aPager.length ;j++){
        aDotOne[j].className = 'dot dot-one dot-others';
    }
    aDotOne[inumOne].className = 'dot dot-one';
    animate(oCarousolBox,{left:-inumOne * 296});
}

oContentsMoreOne.onclick = function () {
    numOne++;
    if(numOne <=2 ){
        animate(oCarousolBox,{left:-numOne * 296});
    }
    if(numOne >=2 ){
        numOne =2;
    }
    runContents(numOne);
}
oContentsBackOne.onclick = function () {
    numOne--;
    if(numOne >= 0){
        animate(oCarousolBox,{left:-numOne * 296});
    }
    if(numOne <= 0){
        numOne = 0;
    }
    runContents(numOne);
}




//内容轮播图结束
