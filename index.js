const numInput = document.getElementById('numInput')

function clickBtn(obj) {
    const clicked = obj.innerHTML
    
    if (clicked == '=') {
        numInput.innerHTML = eval(numInput.innerHTML)

    } else if (clicked == 'Del') {
        numInput.innerHTML = 0

    } else {

        if(numInput.innerHTML == '0') {
            numInput.innerHTML = clicked

        } else {
            numInput.innerHTML += clicked
        }
    }
}