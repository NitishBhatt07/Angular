import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.css'
})
export class ConsoleComponent {

  userData:any;
  constructor(private userService: UserserviceService){
      this.userData = this.userService.getUserData();
    //  return this.userData
  }

  userList:any;
  deleteDataFromLocal(userId:any){
    let index = this.userData.indexOf(this.userData[userId]);
    // if(index>-1){
      this.userData.splice(index,1);
    // }
    // this.userService.addUser(this.userData);
    localStorage.removeItem("userData");
    localStorage.setItem('userData',JSON.stringify(this.userData))
  }
  

}
