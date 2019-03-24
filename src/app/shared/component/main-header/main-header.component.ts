import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private productsServe :ProductsService) { }
  private cart : number = 0;
  private allproducts : any ;
  private cartOfProducts : any = [] ;
  ngOnInit() {
    this.productsServe.getProducts().subscribe(res =>{
      this.allproducts = res;
    
    const products = JSON.parse(localStorage.getItem('products'));
    this.cart = products.length;
    products.forEach ( prodID  =>{
      const product =this.allproducts.filter(p =>p.id === prodID)[0];
      console.log(product);
      this.cartOfProducts.push(product);
    });
  });
    }

  
  }


