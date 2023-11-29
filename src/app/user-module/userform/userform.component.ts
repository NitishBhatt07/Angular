import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent implements OnInit {


  constructor(private userService: UserserviceService,private router: Router,private route: ActivatedRoute,){}

  userData:any;
  action:string;
  name:string;
  email:string;
  phone:string;
  age:string;
  userId:string;
  data:any;
  updatedUserList:any;

  ngOnInit(): void{
      this.userId = this.route.snapshot.paramMap.get('id');
      this.action = this.route.snapshot.paramMap.get('action');
      this.userData = this.userService.getUserData();
      for (let user of this.userData) {
        if(user.id.toString() == this.userId){
          this.name = user.name
          this.email = user.email
          this.phone = user.phone
          this.age = user.age
        }
      }
    }
  
  getFormData(formData:any){
    // add data to local storage via service
    this.userService.addUser(formData);
    console.warn("submit clicked");
    this.router.navigate(['']);
  }

  updateUser(formData:any){
    console.warn("update clicked")
      let index = this.userData.indexOf(this.userData[this.userId]);
    // if(index>-1){
      console.warn(index,this.userData)
      this.userData.splice(index,1);
    // }
    // this.userService.addUser(this.userData);
      console.warn(index,this.userData)

      localStorage.removeItem("userData");
      localStorage.setItem('userData',JSON.stringify(this.userData));
      this.userService.addUser(formData)
      this.router.navigate(['']);
  }

  

}
