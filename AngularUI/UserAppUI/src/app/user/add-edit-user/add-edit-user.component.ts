import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  isLinear = false;
 
  registrationForm: FormGroup;
  
  @Input() regForm: FormGroup;
  user_id_update:string

  UserListEdit:Array<Object>=[]
  public UserListRead:Array<Object>=[]

  today: number 

  constructor(private sharedservice:SharedService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
    var d = new Date(); 
		var NoTimeDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); 
    console.log("date :",NoTimeDate)
 // get user id for user data update
 this.user_id_update= this.route.snapshot.params['data'];
 console.log("user id for update :",this.user_id_update)

 if(Number(this.user_id_update) > 0){
  //get particular user data function call
  this.updateFormCreate(Number(this.user_id_update))
  } else{
      this.addFormCreate(NoTimeDate)
    } 
  }

  addFormCreate(dt){
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'F_Name': new FormControl(null, Validators.required),
        'M_Name': new FormControl(null,Validators.required),
        'L_Name': new FormControl(null, Validators.required),
        'Date_Of_Birth': new FormControl(null, Validators.required),
        'U_Email': new FormControl(null, [Validators.required,Validators.email]),
        'Ph_Number': new FormControl(null, Validators.required),
      }),
      'addrDetails': new FormGroup({
        'Addr_City': new FormControl(null, [Validators.required]),
        'Addr_State': new FormControl(null, [Validators.required]),
        'Addr_Zip': new FormControl(null, [Validators.required]),
        'U_Created_On': new FormControl(dt, [Validators.required])
      })
     
    });
  }

  updateFormCreate(uuid:number) {
    console.log("uuid ",uuid)
    this.sharedservice.getParticularUserData(uuid).subscribe(data=> {
      this.UserListEdit=data;
     
      console.log("user data particular:",this.UserListEdit);
      for(let i of this.UserListEdit){
      //console.log("key out for ",i["UserId"])
      if(i["UserId"] == this.user_id_update) {
          
       this.UserListRead.push(i)
       
      for(let i1 of this.UserListRead) {
       
      this.registrationForm.controls["personalDetails"].setValue ({
        F_Name:i1["F_Name"],
        M_Name:i1["M_Name"],
        L_Name:i1["L_Name"],
        Date_Of_Birth:i1["Date_Of_Birth"],
        U_Email:i1["U_Email"],
        Ph_Number:i1["Ph_Number"]
      });
     
      this.registrationForm.controls["addrDetails"].setValue ({
        Addr_City:i1["Addr_City"],
        Addr_State:i1["Addr_State"],
        Addr_Zip:i1["Addr_Zip"],
        U_Created_On:i1["U_Created_On"]
      });
      } 
      
      }
      }
      
    })


    
    this.registrationForm = new FormGroup ({
      'personalDetails': new FormGroup({
        'F_Name': new FormControl(null, Validators.required),
        'M_Name': new FormControl(null,Validators.required),
        'L_Name': new FormControl(null, Validators.required),
        'Date_Of_Birth': new FormControl(null, Validators.required),
        'U_Email': new FormControl(null, [Validators.required,Validators.email]),
        'Ph_Number': new FormControl(null, Validators.required),
      }),
      'addrDetails': new FormGroup({
        'Addr_City': new FormControl(null, [Validators.required]),
        'Addr_State': new FormControl(null, [Validators.required]),
        'Addr_Zip': new FormControl(null, [Validators.required]),
        'U_Created_On': new FormControl(null, [Validators.required])
      })
     
    });

  }

}
