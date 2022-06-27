import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
//import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { UserProduct } from '../models/UserProduct';
import { AccountComponent } from '../account/account.component';
import { UserproductService } from '../services/userproduct.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  httpc: any;
  constructor(private _productservice: ProductService,
    private userProductservice: UserproductService ) { }

  products: Array<Product> = new Array<Product>();
  ngOnInit(): void {

    this._productservice.getProducts().subscribe((res) => this.products = res, err => console.log(err))
  }


  UserProduct: Product = new UserProduct();
  UserProducts: Array<UserProduct> = new Array<UserProduct>();
  
  addtocart(product: any){
    this.userProductservice.addtoCart(product);
   }
}

