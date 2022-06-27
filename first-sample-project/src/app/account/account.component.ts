import { Component, OnInit } from '@angular/core';
import { UserProduct } from '../models/UserProduct';
import { UserproductService } from '../services/userproduct.service';
import { HomeComponent } from '../home/home.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

 

  ngOnInit(): void {


 
}
}