import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  Dataa: Array<string>=new Array;
  
  userinput:string

  isUpdate=false;
  isSave=false;
  constructor(private sharedservice:SharedService ,
    private route:ActivatedRoute,
    private router:Router) { }

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;
  ButtonText:string;
  user_id_update:string;

  ngOnInit(): void {
    this.user_id_update= this.route.snapshot.params['data'];
    console.log("user id for update step 3:",this.user_id_update)
    if(Number(this.user_id_update) > 0){
          this.isUpdate=true;
          this.ButtonText="Update";
    }else{
      this.isSave=true
      this.ButtonText="Save";
    }
  }

  submit() {
    console.log(this.regForm.value.personalDetails );
    this.formSubmitted = true;
   
    if(Number(this.user_id_update) > 0){
    //add user data function call
    this.updateUserdata(Number(this.user_id_update))
    } else {
       //add user data function call
      this.postUserdata()
    }
  }

  postUserdata(){
    var phnumber=Number(this.regForm.value.personalDetails.Ph_Number)
    var val ={
      "F_Name":this.regForm.value.personalDetails.F_Name,
      "M_Name":this.regForm.value.personalDetails.M_Name,
      "L_Name":this.regForm.value.personalDetails.L_Name,
      "Date_Of_Birth":this.regForm.value.personalDetails.Date_Of_Birth,
      "U_Email":this.regForm.value.personalDetails.U_Email,
      "Ph_Number":Number(phnumber),
      "Notes1":this.regForm.value.personalDetails.Notes1,
      "Addr_line_1":this.regForm.value.addrDetails.Addr_line_1,
      "Addr_City":this.regForm.value.addrDetails.Addr_City,
      "Addr_State":this.regForm.value.addrDetails.Addr_State,
      "Addr_Zip":this.regForm.value.addrDetails.Addr_Zip,
      "U_Created_On":this.regForm.value.addrDetails.U_Created_On
     }
    
     console.log("json",val)
    
    this.sharedservice.addUserData(val).subscribe(data=> {
      this.userinput=data.toString();
     alert(this.userinput);
      //go to home page
      this.router.navigate(['user'])
    })
  }

  //update user data
  updateUserdata(u_id){
    var data=this.regForm.value.personalDetails.Notes1
    console.log("length :",data.length)
    var phnumber=Number(this.regForm.value.personalDetails.Ph_Number)
    var date1=this.regForm.value.personalDetails.Date_Of_Birth
  //  console.log("no ",date1 | Date.)
    var val ={
      "UserId":Number(u_id),
      "F_Name":this.regForm.value.personalDetails.F_Name,
      "M_Name":this.regForm.value.personalDetails.M_Name,
      "L_Name":this.regForm.value.personalDetails.L_Name,
      "Date_Of_Birth":this.regForm.value.personalDetails.Date_Of_Birth,
      "U_Email":this.regForm.value.personalDetails.U_Email,
      "Ph_Number":Number(phnumber),
      "Notes1":this.regForm.value.personalDetails.Notes1,
      "Addr_line_1":this.regForm.value.addrDetails.Addr_line_1,
      "Addr_City":this.regForm.value.addrDetails.Addr_City,
      "Addr_State":this.regForm.value.addrDetails.Addr_State,
      "Addr_Zip":this.regForm.value.addrDetails.Addr_Zip,
      "U_Created_On":this.regForm.value.addrDetails.U_Created_On
     }
    
     console.log("updation value json",val)
    
    this.sharedservice.updateUserData(val).subscribe(data=> {
      this.userinput=data.toString();
     alert(this.userinput);

     //go to home page
     this.router.navigate(['user'])
    })
  }

}
