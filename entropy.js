//подсчет энтропии с файла

let fs = require('fs');
let arg = process.argv;
let text;

let alph = new Array();

fs.readFile(arg[2], (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    if (data.length == 0) {
        throw new Error('Пустой файл');
    }

    text = data.toString();
    

    for (let i = 0; i < text.length; i++){
        if (alph[text.charAt(i)])
            alph[text.charAt(i)]++;
        else
            alph[text.charAt(i)] = 1;
    }
    
    /*
    for (let i = 0; i < text.length; i++){
        alph[text.charAt(i)] = 0;
    }
    for (let i = 0; i < text.length; i++) {
        alph[text.charAt(i)]++;
    }
    */

    console.log(alph);

    let h = 0;
    let n = 0;

    for (let i in alph){
        alph[i] /= text.length;
        n++;
    }

    if (n == 1){
        console.log(1);
        return;
    }
    else {
        for (let i in alph) {
            h -= alph[i] * Math.log2(alph[i]);
        }

        h /= Math.log2(n);

        console.log(h);
    }
});
