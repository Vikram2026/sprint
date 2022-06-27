import { Component, OnInit } from '@angular/core';
import { UserproductService } from '../services/userproduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private userproductService : UserproductService) { }


  ngOnInit(): void {
    this.userproductService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.userproductService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.userproductService.removeCartItem(item);
  }
  emptycart(){
    this.userproductService.removeAllCart();
  }


}
