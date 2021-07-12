import Shape from './Shape'

class Reactangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width;
        this.height = height;
    }

    draw () {
        console.log('Drawing a Reactangle');
    }

    calculate() {
        return this.width = this.width
    }
}

export default Reactangle;