const messages = [];
function writeCards(array, eventName){
    for(let i = 0; i < array.length; i++){
        messages[i]= `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    }
    return messages
}

function countDown(int){
    while(int >= 0){
        console.log(int)
        int--
    }
}













