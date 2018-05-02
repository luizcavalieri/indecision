


export default class Util{
    constructor(){
        this.name = 'Util';
        console.log(`${this.name} is running.`);
    }

    helper(){
        console.log('helper function');
    }

    square(x) {
         return x * x;
    }
}



const add = (a, b) => {
    return a + b;
}

export {add};