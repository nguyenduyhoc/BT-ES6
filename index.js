let arrNumber = []
document.getElementById("btnSoSanh").onclick = (event) => {
    event.preventDefault();
    const guessNumber = Math.round(Math.random() * 100)
    const number = document.querySelector('#number').value
 
    arrNumber.push(number)

    if (number > guessNumber) {
        alert("Số bạn nhập lớn hơn rùi")
    } else if (number < guessNumber) {
        alert("Số bạn nhập nhỏ hơn rùi")
    } else {
        alert("Chúc mừng bạn đã đoán đúng!")
    }
    document.querySelector('#guessNumber').value = guessNumber

    // console.log(arrNumber)


    let contentTr = `<tr>`;
    for ( let i = 0; i < arrNumber.length; i++) {
        let stt = i+1
        contentTr += `<td style="display:block"> Lần ${stt} : ${arrNumber[i]} </td> `
    }
    contentTr += `</tr>`
    document.querySelector("tbody").innerHTML = contentTr;

}

