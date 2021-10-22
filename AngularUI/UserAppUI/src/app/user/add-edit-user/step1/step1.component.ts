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

  notedata:string;
  constructor(private service:SharedService,
    private route:ActivatedRoute) { }
  @Input() regForm: FormGroup;
  charlength:number=0;
  text:string = ''; 

  

  progress=0;
  ngOnInit(): void {
    

  }
  onKeyUp(x) { 
    this.text = x.target.value ;
    this.charlength=this.text.length;
    this.progress=(this.charlength/1000)*100;
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
    this.regForm.get('personalDetails').get('Notes1').markAsTouched();
    this.regForm.get('personalDetails').get('Notes1').updateValueAndValidity();
  }

}
