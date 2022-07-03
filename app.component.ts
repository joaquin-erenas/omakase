import { Component, HostListener } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaAngular';
  nombre = 'Joaquín Erenas';
  scrollFijo:boolean = false;
  private static cookie_name='';
  private static all_cookies:any='';
  static servicioCookies:CookieService;

  constructor(private cookieService:CookieService){
  }
   
  public static setCookie(){
    this.servicioCookies.set('name','Tutorialswebsite');
  }
   
  public static deleteCookie(){
    this.servicioCookies.delete('name');
  }
   
  static deleteAll(){
    this.servicioCookies.deleteAll();
  }
   
  static ngOnInit(): void {
  this.cookie_name=this.servicioCookies.get('name');
  this.all_cookies=this.servicioCookies.getAll();  // get all cookies object
  }

  @HostListener('window:scroll',['$event']) onscroll() {
    if(window.scrollY>0) {
      this.scrollFijo = true;
    }
    else {
      this.scrollFijo = false;
    }
  }
}
