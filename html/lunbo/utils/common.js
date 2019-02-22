function animate(el,target){
    clearInterval(el.timer);
    el.timer = setInterval(function(){
        var leader = el.offsetLeft;
        var step = (target-leader)/10;
        if(Math.abs(step) < 1){
            step = step >0?1:-1;
        }
        leader += step;
        el.style.left = leader + 'px';
        //停止条件
        if(leader == target){
            clearInterval(el.timer);
        }

    },17)
}