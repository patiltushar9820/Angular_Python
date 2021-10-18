import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(private route:ActivatedRoute,
    private service:SharedService) { }

  user_id_update:string

  UserListEdit:Array<Object>=[]
  public UserListRead:Array<Object>=[]
  formEditable:boolean=false
  @Input() regForm: FormGroup;

  ngOnInit(): void {
    this.user_id_update= this.route.snapshot.params['data'];
    console.log("user id for update step 1 :",this.user_id_update)

    if(Number(this.user_id_update) > 0){
      this.formEditable=true
      //get particular user data function call
     /* this.service.getParticularUserData(this.user_id_update).subscribe(data=>{
        this.UserListEdit=data;
        console.log("user data particular:",this.UserListEdit);
        for(let i of this.UserListEdit){
        //console.log("key out for ",i["UserId"])
        if(i["UserId"] == this.user_id_update) {
         console.log("key ",i["F_Name"] )
      
         this.UserListRead.push(i)
         console.log("push data",this.UserListRead)
         
        }
        }
        
      })
      */
    } 

  }

  step2Submitted() {
    this.regForm.get('addrDetails').get('Addr_City').markAsTouched();
    this.regForm.get('addrDetails').get('Addr_City').updateValueAndValidity();

    this.regForm.get('addrDetails').get('Addr_State').markAsTouched();
    this.regForm.get('addrDetails').get('Addr_State').updateValueAndValidity();

    this.regForm.get('addrDetails').get('Addr_Zip').markAsTouched();
    this.regForm.get('addrDetails').get('Addr_Zip').updateValueAndValidity();

    this.regForm.get('addrDetails').get('U_Created_On').markAsTouched();
    this.regForm.get('addrDetails').get('U_Created_On').updateValueAndValidity();
  }
}
