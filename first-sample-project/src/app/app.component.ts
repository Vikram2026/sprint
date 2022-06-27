import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserproductService } from './services/userproduct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-sample-project';

  public totalItem : number = 0;
  constructor(private _auth:AuthService, private userproductService:UserproductService){}

    ngOnInit(): void {
      this.userproductService.getProducts()
      .subscribe((res: any[])=>{
        this.totalItem = res.length;
      })
    }
  
  LoggedIn(input:boolean){
    if(input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }
  LogOut(){
    this._auth.logoutUser();
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
