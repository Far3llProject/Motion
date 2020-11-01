import bag from "./bag.js"

let talk = ['olá Docinho...', 'Tudo bem com voce?', 'você viu meu gatinho?', 'se você o encontrar, lhe dou uma chave!!!', 'encontrou?' ]
let talk_2 = ['', 'neko é você?', 'por onde você andou?', 'Obrigado!!!', 'aqui está sua chave que prometi...', '[voce recebeu a chave "gato"]']
var button = document.getElementById("bruxa_talk"),
  count = 0,
  count_2 = 0
button.onclick = function() {
  count += 1
    
    if (count >= 4){
       document.getElementById("bruxa").innerHTML = talk[4]
       document.getElementById("key_witch").style.display = "initial"
    } else {
        document.getElementById("bruxa").innerHTML = talk[count]
    }
    
    let key = document.getElementById("poket").value

    if (key === "neko") {
        count_2 += 1
        document.getElementById("bruxa").innerHTML = talk_2[count_2]
        document.getElementById("neko").style.display = "initial"
        if (count_2 > 4){
            document.getElementById("bruxa").innerHTML = talk_2[5]
            document.getElementById("neko").style.display = "none"
            document.getElementById("key_witch").style.display = "none"
            bag("gato")
            document.getElementById("bruxa_talk").style.display = "none"
        }
    }
}


