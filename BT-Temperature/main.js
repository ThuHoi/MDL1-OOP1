let $ = document.getElementById.bind(document);

class temperature {
    celsius;

    constructor(celsius) {
        this.celsius = celsius;
    }

    getF() {
        return 9 / 5 * this.celsius + 32;
    }

    getKenvin() {
        return this.celsius + 273.15
    }
}

let temperature1 = new temperature(25);
$('input').value = temperature1.celsius;

function change() {
    let Input = parseInt($('input').value);
    temperature1.celsius = Input;
    if (temperature1.celsius <= -273) {
        temperature1.celsius = 0;
    }
    $('result').innerHTML = "Độ F :" + temperature1.getF() + '<br>' + "Độ K là: " + temperature1.getKenvin();
}

$('result').innerHTML = "Độ F :" + temperature1.getF() + '<br>' + "Độ K là: " + temperature1.getKenvin();




