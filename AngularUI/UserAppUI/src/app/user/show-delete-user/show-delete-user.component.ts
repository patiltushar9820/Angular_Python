import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-delete-user',
  templateUrl: './show-delete-user.component.html',
  styleUrls: ['./show-delete-user.component.css']
})
export class ShowDeleteUserComponent implements OnInit,AfterViewInit {

  constructor(private sharedservice:SharedService,
    private router:Router) { }

  UserList:Array<Object>=[];
  UserListRead1:Array<Object>=[];
  user_id_update:string;

  @ViewChild(
    MatPaginator,
    {
        static:true
    })
    paginator!:MatPaginator;

  displayedColumns: string[] = ['F_Name', 'U_Created_On','U_Email','Date_Of_Birth','Addr_State','Action'];

  dataSource = new MatTableDataSource<Object>([]);

  ngOnInit(): void {
    this.getUserdata();
 this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
  //read user data
  getUserdata(){
    this.sharedservice.getUserData().subscribe(data=>{
      this.UserList=data;
      this.dataSource.data=data;
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
      this.router.navigate(['user/updateuser/',this.user_id_update])
    }
  }
  //delete user data
  deleteUserdata(u_id) {
    if(confirm('Are You Sure To Delete It ??')) {
      this.sharedservice.deleteUserData(u_id.UserId).subscribe(data=> {
        alert(data.toString())
        this.router.navigate(['user'])
      })
    }
  }
  applySearch(filterValue:String){
    this.dataSource.filter=filterValue.trim().toLocaleLowerCase()
  }
}
