import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'user'
import { UserService } from 'user-service'



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  uname!: String;

  user: User = new User();

  constructor(private userService: UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUserByName(this.uname).subscribe(data => {
      this.user = data;
    },
    error => console.log(error))
  }

}
