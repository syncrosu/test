setInterval(()=>{
let amount=Game.computedMouseCps*1000;
Game.Earn(amount);
Game.handmadeCookies+=amount;},1000);
Game.lumps=1e+200;Game.lumpsTotal=1e+200;
setInterval(()=>{
let a=new Game.shimmer("golden");
  a.spawnLead = 1;
  a = new Game.shimmer("reindeer");
 a.spawnLead = 1;
}
  ,30000);
