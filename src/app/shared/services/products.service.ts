import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products : Array<Product>;
  constructor() { }
  getProducts():any{
    this.products = [{
      id : 1,
      name :"Samsung Galaxy s5",
      description : "hollla this descritpion of Samsung",
      image : "assets/img/dummyimg.png",
      price: 250,
      category : "mobile" ,
      favorite : true 

    },{
      id : 2,
      name :"Samsung Galaxy s5",
      description : "hollla this descritpion of Samsung",
      image : "assets/img/dummyimg.png",
      price: 350,
      category : "mobile" ,
      favorite : true 

    },
    {
      id : 3,
      name :"Samsung Galaxy s9",
      description : "hollla this descritpion of Samsung",
      image : "assets/img/dummyimg.png",
      price: 450,
      category : "mobile" ,
      favorite : true 

    },
    {
      id : 4,
      name :"Samsung Galaxy s7",
      description : "hollla this descritpion of Samsung",
      image : "assets/img/dummyimg.png",
      price: 750,
      category : "mobile" ,
      favorite : false 

    },
    {
      id : 5,
      name :"Samsung Galaxy A7",
      description : "hollla this descritpion of Samsung",
      image : "assets/img/dummyimg.png",
      price: 150,
      category : "mobile" ,
      favorite : true 

    }
  ]
  const productsObservable = new Observable (observable =>{
    setTimeout(() => {
      observable.next(this.products);
    }, 1000);
  });
  return productsObservable;
  }
}
