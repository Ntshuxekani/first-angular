import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOGIN';

  username:string;
  ngUname:string;

  display(): void{
    this.username="welcome to " +this.ngUname+ " page";
  }
}
