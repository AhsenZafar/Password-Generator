const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1 = document.getElementById("password1")





function passwordGen(){
   
    let password =  ""
    for (let i =0; i < 9; i ++){
    
        let num = Math.floor(Math.random()*characters.length)
        let char = characters[num]
        password += char
    
    }
    password1.textContent = password

}

passwordGen()
