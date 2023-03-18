setInterval(()=>{
let amount=Game.computedMouseCps*1000;
Game.Earn(amount);
Game.handmadeCookies+=amount;},1000);
