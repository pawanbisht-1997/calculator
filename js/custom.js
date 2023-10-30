const targetDate = new Date("2023-12-31 23:53:59").getTime();
// Update the countdown everySecond 
const countdown = setInterval(function(){
    const now = new Date().getTime();
    const reamainingTime = targetDate - now;
    if(reamainingTime<=0){
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "countdown Expired";
    }
    else{
        const days = Math.floor(reamainingTime/(100*60*60*24));
        const hours = Math.floor((reamainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((reamainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((reamainingTime % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerHTML = `
        ${days}
        ${hours}
        ${minutes}
        ${seconds}
         `;
    }

},1000);