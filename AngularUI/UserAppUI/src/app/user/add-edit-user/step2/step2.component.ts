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
  

  }

  step2Submitted() {
    this.regForm.get('addrDetails').get('Addr_line_1').markAsTouched();
    this.regForm.get('addrDetails').get('Addr_line_1').updateValueAndValidity();
    
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
