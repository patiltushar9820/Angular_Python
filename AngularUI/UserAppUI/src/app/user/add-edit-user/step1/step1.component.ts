import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  user_id_update:string;
  UserListEdit:Array<Object>=[];
  formEditable:boolean=false
  public UserListRead:Array<Object>=[]

  constructor(private service:SharedService,
    private route:ActivatedRoute) { }
  @Input() regForm: FormGroup;

  ngOnInit(): void {

    this.user_id_update= this.route.snapshot.params['data'];
    console.log("user id for update step 1 :",this.user_id_update)
  }

  step1Submitted() {
    this.regForm.get('personalDetails').get('F_Name').markAsTouched();
    this.regForm.get('personalDetails').get('F_Name').updateValueAndValidity();
    this.regForm.get('personalDetails').get('M_Name').markAsTouched();
    this.regForm.get('personalDetails').get('M_Name').updateValueAndValidity();
    this.regForm.get('personalDetails').get('L_Name').markAsTouched();
    this.regForm.get('personalDetails').get('L_Name').updateValueAndValidity();
    this.regForm.get('personalDetails').get('Date_Of_Birth').markAsTouched();
    this.regForm.get('personalDetails').get('Date_Of_Birth').updateValueAndValidity();
    this.regForm.get('personalDetails').get('U_Email').markAsTouched();
    this.regForm.get('personalDetails').get('U_Email').updateValueAndValidity();
    this.regForm.get('personalDetails').get('Ph_Number').markAsTouched();
    this.regForm.get('personalDetails').get('Ph_Number').updateValueAndValidity();
  }

}
