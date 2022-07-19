import { Component, OnInit } from '@angular/core';
import { User } from 'user'
import { UserService } from 'user-service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchTerm = '';
  term = '';

  users: User[] = [];


  constructor(private userService: UserService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data =>{
      this.users = data;
    })
  }

  userDetails(uname: String){
    this.router.navigate(['user-details, uname'])
  }

  updateUser(uname: String, user: User){
    this.router.navigate(['update-user',uname])
  }

  deleteUser(uname: String){
    this.userService.deleteMovie(uname).subscribe(data =>{
      this.getUsers();
      console.log(data)
    })
  }
  

}
