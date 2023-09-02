import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
logo: string='store';
navbarLinks: string[]=['Home','products','About','contact us'];
language:string='en-Us'
constructor(){}
changeLanguage(){
   this.language='ar-SA'
  
}
}
