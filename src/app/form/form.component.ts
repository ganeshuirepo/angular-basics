import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, NgForm, Validators, FormsModule    } from '@angular/forms';
import { validators } from '../validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  validForm: boolean;
  enterID: string;
  enterName: string;
  enterMail: any;
  registerData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.validForm = false;
  }

  ngOnInit() {
    this.registerData = this.formBuilder.group({
      empid: ['', Validators.compose([
        Validators.pattern(validators.number),
        Validators.required
      ])],
      empname: ['', Validators.compose([
        Validators.required
      ])],
      empmail: ['', Validators.compose([
        Validators.pattern(validators.email),
        Validators.required
      ])]
    })
  }

  onSubmit(form: NgForm) {
    let formValue = form.value;

    this.enterID = formValue['empid'];
      this.enterName = formValue['empname'];
      this.enterMail = formValue['empmail'];
      console.log("enter id is: ", this.enterID);
      console.log("enter name is: ", this.enterName);

    if (this.enterID != "" && this.enterName != "") {
     if(this.enterID != null && this.enterName != null)  {
      this.validForm = true;
    }
  }else {
      this.validForm = false;
    }



    form.reset();
  }

}
