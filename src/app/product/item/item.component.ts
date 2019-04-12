import { Product } from './../../shared/models/product';
import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Product;
  @Output() onClickCount = new EventEmitter();
  @Output() onClickCart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addToCart(){
    const products = JSON.parse(localStorage.getItem('products'));
    if(products == undefined ){
      localStorage.setItem('products',JSON.stringify([this.product.id]));

    }
    else {
      products.push(this.product.id);
      localStorage.setItem('products',JSON.stringify(products));
    }
  }
  clickToCount(){
   this.onClickCount.emit(1);
    //this.onSelctProduct.emit(this.product);
    console.log(this.product)
    this.onClickCart.emit(this.product);
    
  }
  
}
