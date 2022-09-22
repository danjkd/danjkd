 const txtElement = ['Hello', 'Horas','สวัสดี ครับ/ค่ะ', 'Konnichiwa', 'Olá', '안녕하세요', 'Bonjour', 'Namaste', '你好!', 'Salaam', 'grüß Gott', 'Ahoj'];
 let count = 0;
 let txtIndex = 0;
 let currentTxt = '';
 let words = '';

 (function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 360);

 })();