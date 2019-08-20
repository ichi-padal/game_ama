
/*function dick(){
    let container = document.getElementById('ball');
    container.style.top=250+"px";
} */
	function moveRect(e){
	let ball = document.getElementById("ball");
	let cs = window.getComputedStyle(ball);
     
    let left = parseInt(cs.marginLeft);
    let top = parseInt(cs.marginTop);
 
	switch(e.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(left>0)
                ball.style.marginLeft = left - 10 + "px";
            break;
        case 38:   // если нажата клавиша вверх
            if(top>0)
                ball.style.marginTop = top - 10 + "px";
            break;
        case 39:   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                ball.style.marginLeft = left + 10 + "px";
            break;
        case 40:   // если нажата клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
                ball.style.marginTop = top + 10 + "px";
            break;
    }
}
 
addEventListener("keydown", moveRect);