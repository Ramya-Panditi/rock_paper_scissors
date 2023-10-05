function move(user){
    var cmove = Math.random();
    
    if(user === "rock" && cmove>=1/3 && cmove<2/3){
        document.getElementById("user").src = "rock-removebg-preview.png";
        document.getElementById("comp").src = "paper-removebg-preview.png";   
        document.getElementById('res').textContent = "COMPUTER WON";
    }
    else if(user === "rock" && cmove>=2/3){
        document.getElementById("user").src = "rock-removebg-preview.png";
        document.getElementById("comp").src = "scissors-removebg-preview.png";   
        document.getElementById('res').textContent = "YOU WON";
    }
    else if(user === "paper" && cmove>=2/3){
        document.getElementById("user").src = "paper-removebg-preview.png";
        document.getElementById("comp").src = "scissors-removebg-preview.png";   
        document.getElementById('res').textContent = "COMPUTER WON";
    }
    else if(user === "paper" && cmove<1/3){
        document.getElementById("user").src = "paper-removebg-preview.png";
        document.getElementById("comp").src = "rock-removebg-preview.png";   
        document.getElementById('res').textContent = "YOU WON";
    }
    else if(user === "scissors" && cmove<1/3){
        document.getElementById("user").src = "scissors-removebg-preview.png";
        document.getElementById("comp").src = "rock-removebg-preview.png";   
        document.getElementById('res').textContent = "COMPUTER WON";
    }
    else if(user === "scissors" && cmove>=1/3 && cmove<2/3){
        document.getElementById("user").src = "scissors-removebg-preview.png";
        document.getElementById("comp").src = "paper-removebg-preview.png";   
        document.getElementById('res').textContent = "ITS A TIE";
    }else{
        
        document.getElementById('res').textContent = "ITS A TIE";
        
    }
    
   

}
