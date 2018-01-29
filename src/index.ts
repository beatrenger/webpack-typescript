import {numeros} from './racional';
class Saludos {

    saludo(): void {
      console.log('Hello world som ething');
      console.log('something else');
    }
}

// var s: Saludos;
//
// s = new Saludos();
//
// s.saludo();

var r,r1,r2,rr,sum: numeros.Racional;

r = new numeros.Racional(5,6);
r2 = new numeros.Racional(4,8);
r.disp();
console.log("+");
r2.disp();
console.log("=");
sum = numeros.Racional.suma(r,r2);
sum.disp();
console.log("reduced");
 rr = numeros.Racional.reducion(sum);
 rr.disp();


var sn:string;
var sd:string;
//sn=prompt("numerador:");
//sd=prompt("Denomador:");

//r1 = new numeros.Racional(Number(sn),Number(sd));
//r1.dispHtml();
// numeros.Racional.move(55);


// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeteasdfrs = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeteasdfrs);
//     }
// }
//
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters:number = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
//
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//
// sam.move(3);
// tom.move();
