import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-listProd',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public products;
  public total = 0 ;
  public product;
  constructor(private productsServe :ProductsService) { }

  ngOnInit() {
  this.productsServe.getProducts().subscribe(res =>{
    this.products = res
  })
  }
  onClickCount(e){
//this.product= e ;
    this.total = this.total + e ;
    //console.log(this.product);
    console.log(this.total)
  }
 
}
