import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-show-delete-user',
  templateUrl: './show-delete-user.component.html',
  styleUrls: ['./show-delete-user.component.css']
})
export class ShowDeleteUserComponent implements OnInit {

  constructor(private sharedservice:SharedService,
    private router:Router) { }

  UserList:Array<Object>=[];

  user_id_update:string;

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['F_Name', 'U_Created_On','U_Email','Addr_State','Action'];

  ngOnInit(): void {
   // this.UserList.paginator = this.paginator;
    this.getUserdata();
  }

  //read user data
  getUserdata(){
    this.sharedservice.getUserData().subscribe(data=>{
      this.UserList=data;
      console.log("user data :",this.UserList);
    })
  }
  //add new user data
  addUserdata() {
    this.router.navigate(['user/adduser/'])
  }
  //update user data
  updateUserdata(u_id) {
    this.user_id_update=u_id.UserId
    if(this.user_id_update!==undefined) {
      this.router.navigate(['user',this.user_id_update])
    }
  }


  //delete user data
  deleteUserdata(u_id) {
    if(confirm('Are You Sure To Delete It ??')) {
      this.sharedservice.deleteUserData(u_id.UserId).subscribe(data=> {
        alert(data.toString())
      })
    }
  }

}
