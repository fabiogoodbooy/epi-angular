import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'epi';
  public product ;
  onClickCart(e){
this.product = e ;
console.log(this.product);
  }
}
