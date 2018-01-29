namespace geometria{
   export class Punto{
     x:number;
     y:number;
     constructor(x:number,y:number){
       this.x = x;
       this.y = y;
     }
   }

   export class Recta{

     static intersecta(l1:Recta,l2:Recta):Punto{
    var  p:Punto;
    var x,y: number;

    p= new Punto(x,y);
       return (p);
     }
   }
}
