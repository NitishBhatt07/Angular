import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  addUser(user){
    let users = [];
    if(localStorage.getItem('userData')){
      // take already stored data and extend it to users array
      users = JSON.parse(localStorage.getItem('userData'));
      // this ... is used to extend the data to existing list
      user['id'] = Math.floor(Math.random() * 100);
      users = [...users,user];
    }else{
      user['id'] = users.length+1;
      users = [user];
    }
    localStorage.setItem("userData", JSON.stringify(users));
  }

  getUserData(){
    return JSON.parse(localStorage.getItem('userData'));
  }

}
