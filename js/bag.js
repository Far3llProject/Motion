
var text = ''
var slot = [];
export default function bag (model) {
    slot.push(model)
    for (let index = 0; index < slot.length; index++){
        text += slot[index] + "<br>"
        document.getElementById("items").innerHTML = text
    }
}

// usar local storage
