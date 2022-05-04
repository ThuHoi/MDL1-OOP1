let $ = document.getElementById.bind(document)

class rectangle {
    length;
    width;

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    getArea() {
        return this.length * this.width;
    }
}

function creatRectangle() {
    let ctx = $('myCanvas').getContext('2d');
    let L = $('h1').value;
    let W = $('h2').value;
    let Rectangle = new rectangle(L, W);

    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(10, 20, Rectangle.length, Rectangle.width);
    ctx.stroke();
    $('chuvi').innerHTML = "Perimeter Rectangle is: " + Rectangle.getPerimeter();
    $('dientich').innerHTML = "Area Rectangle is: " + Rectangle.getArea();
}

