import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  userName = '';
  isUserName = false;
  realUserName = '';

  updateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName != ''){
      this.isUserName = true;
    }else{
      this.isUserName = false;
    }
  }

  onUpdateUserName(){
    if(this.userName != ''){
      console.log('updated user name');
      this.realUserName = this.userName;
      this.userName = '';
    }else{
      console.log('not updated user name');
    }
  }

}
