import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  UserListAutocomplete:Array<Object>=[];
  UserListFilter:Array<Object>=[];
  today: number 
  text:string;

  //@Input() UserListFilter:
  constructor(private sharedservice:SharedService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
   
  
    if(this.ngOnInit) { this.ngOnInit(); }
 

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

  addFormCreate(createddt){
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'Auto_F_Name': new FormControl(null),

        'F_Name': new FormControl(null, Validators.required),
        'M_Name': new FormControl(null,Validators.required),
        'L_Name': new FormControl(null, Validators.required),
        'Date_Of_Birth': new FormControl(null, Validators.required),
        'U_Email': new FormControl(null, [Validators.required,Validators.email]),
        'Ph_Number': new FormControl(null, [ Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
        'Notes1': new FormControl(null, [Validators.required,Validators.maxLength(1000)])
      }),
      'addrDetails': new FormGroup({
        'Addr_line_1':new FormControl(null, [Validators.required]),
        'Addr_City': new FormControl(null, [Validators.required]),
        'Addr_State': new FormControl(null, [Validators.required]),
        'Addr_Zip': new FormControl(null, [ Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]),
        'U_Created_On': new FormControl(createddt, [Validators.required])
      })
     
    });
  }

  updateFormCreate(uuid:number) {
    this.registrationForm = new FormGroup ({
      'personalDetails': new FormGroup({
        'Auto_F_Name': new FormControl(null),
        'F_Name': new FormControl(null, Validators.required),
        'M_Name': new FormControl(null,Validators.required),
        'L_Name': new FormControl(null, Validators.required),
        'Date_Of_Birth': new FormControl(null, Validators.required),
        'U_Email': new FormControl(null, [Validators.required,Validators.email]),
        'Ph_Number': new FormControl(null, Validators.required),
        'Notes1': new FormControl(null, [Validators.required,Validators.maxLength(1000)])
      }),
      'addrDetails': new FormGroup({
        'Addr_City': new FormControl(null, [Validators.required]),
        'Addr_line_1': new FormControl(null, [Validators.required]),
        'Addr_State': new FormControl(null, [Validators.required]),
        'Addr_Zip': new FormControl(null, [Validators.required]),
        'U_Created_On': new FormControl(null, [Validators.required])
      })
     
    });

    console.log("uuid ",uuid)
    this.sharedservice.getParticularUserData(uuid).subscribe(data=> {
      this.UserListEdit=data;
     console.log(this.UserListEdit)
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
        Ph_Number:i1["Ph_Number"],
        Notes1:i1["Notes1"],
      });
     
      this.registrationForm.controls["addrDetails"].setValue ({
        Addr_line_1:i1["Addr_line_1"],
        Addr_City:i1["Addr_City"],
        Addr_State:i1["Addr_State"],
        Addr_Zip:i1["Addr_Zip"],
        U_Created_On:i1["U_Created_On"]
      });
      } 
      
      }
      }
      
    })
  }

  onKeyUp(x) { 
    this.text = x.target.value ;
    //console.log("text value",this.text)
    this.sharedservice.getUserData().subscribe(data=>{
      this.UserListAutocomplete=data;
      
    })
   
     //console.log("autocomplete data :",this.UserListAutocomplete)
     // console.log("user data particular:",this.UserListEdit);
    for(let i of this.UserListAutocomplete){
      
      if(i["F_Name"] == this.text) {
        this.UserListFilter.push(i)
          console.log("filter data",this.UserListFilter)
     /* for(let i1 of this.UserListFilter) {
        
      } 
      */
      }  
    }    

  }

    
  


  
}
