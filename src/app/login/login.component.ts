import { Component, OnInit } from '@angular/core';
import { User } from '../item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {

  userlist: User[] = [];

  constructor(private dataservice: DataService) { }

    getUser() {
      this.dataservice.get()
        .subscribe( users => {
          this.userlist = users;
          console.log('data from service ' + this.userlist[0].name);
        });
    }

  adduser(frm) {
    const newUser:  User = {
      name: frm.name,
      email: frm.email,
      password: frm.password
    };
    this.dataservice.post(newUser)
    .subscribe(users => {
      console.log(users);
      this.getUser();
    });
  }
  ngOnInit() {
    this.getUser();
  }

}
