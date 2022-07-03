import { ApplicationModule, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tienda-omakase',
  templateUrl: './tienda-omakase.component.html',
  styleUrls: ['./tienda-omakase.component.css']
})
export class TiendaOmakaseComponent implements OnInit {

  protected sumaTotal:number;
  idProducto:Array<number>;
  nombreProducto:Array<string>;
  precios:Array<number>;
  productosMenu:Array<Producto>;
  productosEntrantes:Array<Producto>;
  productosCesta:Array<any>;
  precioTotal:number;
  productosDiferentes:number;

  constructor() {
    this.idProducto = [1,2];
    this.precioTotal = 0;
    this.nombreProducto = ['Nigiri salmón','Maki salmón'];
    this.precios = [4.95,3.80];
    this.sumaTotal = 0;
    this.productosDiferentes = 0;
    this.productosEntrantes = [
      new Producto(1,'Algas wakame',5.60,'../../assets/media/sushi5.jpg'),
      new Producto(2,'Maki salmón',3.85,'../../assets/media/sushi2.jpg'),
      new Producto(3,'Maki queso',4.50,'../../assets/media/sushi3.jpg'),
      new Producto(4,'Nigiri huevas',4.23,'../../assets/media/sushi4.jpg'),
      new Producto(5,'Nigiri salmón',4.95,'../../assets/media/sushi1.jpg')
    ];
    this.productosMenu = [
      new Producto(6,'Bandeja nº 1',14.95,'../../assets/media/bandeja1.jpg'),
      new Producto(7,'Bandeja nº 2',11.95,'../../assets/media/bandeja2.jpg'),
      new Producto(8,'Bandeja nº 3',18.50,'../../assets/media/bandeja3.jpg'),
      new Producto(9,'Degustación .1',40,'../../assets/media/bandeja5.jpg'),
      new Producto(10,'Degustación .2',112.80,'../../assets/media/bandeja6.jpg')
    ];
    this.productosCesta = [];
    console.log("El tamaño es: "+this.productosMenu.length);


  }

  comprobarProducto(n:string):boolean{
    for(let producto of this.productosCesta){
      if(producto.getNombre == n){
        return false;
      }
    }
    return true;

  }

  agregarProducto(i:number,n:string,p:number,r:string):void {
    if(this.comprobarProducto(n)) {
      this.productosCesta.push(new Producto(i,n,p,r));
      this.precioTotal+=p;
    }
  }

  public get getSumaTotal(){
    return Math.round(this.precioTotal * 100) / 100;
  }

  getDifProds(n:string):number{
    let total:number = 0;
    for(let producto of this.productosCesta){
      if(producto.getNombre == n){
        total++;
      }
    }
    return total;
  }

  aumentarProducto(n:string):void {
    let indice:number = 0;

    for(let producto of this.productosMenu){
      if(producto.getNombre == n){
        this.productosCesta.push(this.productosMenu[indice]);
        this.precioTotal+=this.productosMenu[indice].getPrecio;

      }
      indice++;
    }
  }

  disminuirProducto(n:string):void {
    let productosCopia:Array<any> = [];
    let c:number = this.getDifProds(n);
    let i:number = 0;

    for(let producto of this.productosCesta){
      if(producto.getNombre != n) {
        productosCopia.push(producto);
      }
      else if(c>1){
        productosCopia.push(producto);
        c--;
      }
    }

    this.productosCesta = productosCopia;

    this.precioTotal = 0;

    for(let producto of this.productosCesta){
        this.precioTotal+=producto.getPrecio;
    }
  }

  getPrecioCalculado(n:string,p:Producto):number {
    let precioCalc = 0;
    return this.getDifProds(n)*p.getPrecio;
  }

  public get getSuma(){
    return this.sumaTotal;
  }

  ngOnInit(): void {
    
  }

}

class Producto {
  private id:number;
  private nombre:string;
  private precio:number;
  private ruta:string;

  constructor(i:number,n:string,p:number,r:string) {
      this.id = i;
      this.nombre = n;
      this.precio = p;
      this.ruta = r;
  }

  public get getId(){
    return this.id;
  }

  public get getRuta() {
    return this.ruta;
  }

  public get getNombre(){
    return this.nombre;
  }

  public get getPrecio(){
    return this.precio;
  }
}
