
/*
* 实现无缝轮播
*
* 参数1：  String类型的轮播图的区域 id
* 参数2：  数组类型的图片，里面存放所有的图片的src ；
*
* */

var imgContainer = "";
var containerWidth = 0;

var index = 0;
function move(){

    if(index > containerWidth){
        index = 0;
    }else{
        index++;
    }
    imgContainer.style.left = -index + "px";
}



function banner(id,imgsArr){


    /*1：获取轮播图的container，并进行样式的设置*/
    var container  = document.getElementById(id);
    container.style.width = "100%";
    container.style.height = "300px";
    container.style.overflow = "hidden";
    container.style.position = "relative";

    /*注意，如果给外边的容器添加了border或者padding，就不能使用offsetWidth*/
    /*containerWidth = container.offsetWidth;*//*输出直接是数字，不带单位*/
    containerWidth = parseInt(window.getComputedStyle(container).width);
    console.log(containerWidth);


    /*2:为图片设置包裹div===imgContainer*/
    imgContainer = document.createElement("div");
    imgContainer.style.width = "100%";
    imgContainer.style.height = "100%";
    imgContainer.style.position = "absolute";
    imgContainer.style.display = "flex";
    imgContainer

    container.appendChild(imgContainer);

    /*3:从数组中拿到图片，并将图片放进去 注意，这是放两遍！！！！*/
    var imgsArr = imgsArr;
    for(var i = 0;i < imgsArr.length;i++){
        var img = document.createElement("img");
        img.src = imgsArr[i];
        img.style.width = (100 / imgsArr.length) + "%";
        img.style.height = "100%";
        img.style.flexShrink = 0;
        imgContainer.appendChild(img);
    }
    imgContainer.innerHTML = imgContainer.innerHTML + imgContainer.innerHTML;



    /*4:调用move方法，设置定时器*/
    setInterval("move()",20);






}
