const token = "1786253960:AAEjM-qpPE7WXqyOUAat5xeiH5_uWo6t6wg"
const chat = "367335715"
const btn = document.getElementById('send')
const textarea = document.getElementById('textarea')
const block = document.getElementById('box')
const upd = document.getElementById('update')


async function sendMessage(text){
    let link = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat + '&text=' + text
    const resp = await fetch(link)
    if (resp.ok == true){
        alert("Отправленно и доставленно")
    }

}

function getText(){
    const a = textarea.value;
    return a
}

btn.addEventListener('click', () => {
    txt = getText()
    if (txt.length == 0){
        alert('Забыли текст')
    }
    else {
        sendMessage(txt)
    }
})

async function getUpdates(){
    let link = 'https://api.telegram.org/bot' + token + '/getUpdates'
    let data = await fetch(link)
    let d = await data.json()
    d = d.result
    console.log(d)
    block.innerHTML = null;
    d.forEach(element => {
        addData(element.message.chat.id + '|' + element.message.text)
    });
    
}

function addData(text){
    
    let el = document.createElement('p')
    el.innerText = text
    block.appendChild(el)

}

// setInterval(getUpdates, 5000)
upd.addEventListener('click', getUpdates)
