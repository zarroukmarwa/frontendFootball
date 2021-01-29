import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectAng';
calcul(a:number,b:number,c:number){
  return(a+b+c)
}
}
