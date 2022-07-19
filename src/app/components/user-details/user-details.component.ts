import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'user'
import { UserService } from 'user-service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  uname!: String;
  user!: User;


  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserByName(this.uname).subscribe(data => {
      this.user = data;
    })
  }

}
