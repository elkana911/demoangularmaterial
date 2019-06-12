import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

export interface IUserFormData{
  username: string;
  password: string;
  address: string;
  gender: string;
  amount: string;
  dateOfBirth: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DatePipe]
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  showSpinner: boolean = true;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      address: ['', Validators.maxLength(30)],
      gender: ['male'],
      amount: [''],
      dateOfBirth: [new Date()],
      // fileKontrak: ['', Validators.required],
      // inputAgreement: ['', Validators.required],
      // mf_short_desc: [''],
      // fileObject: [''],
      // fileEndUser: [''],
      // filePengurus: [''],
      // emailinput: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.myForm.controls; }

  login() {
    let buffer = {
      address: this.myForm.get('email').value,
      dateOfBirth: this.datePipe.transform(this.myForm.get('dateOfBirth').value, 'yyyy-MM-dd'),
      // dateOfBirth: this.myForm.get('dateOfBirth').value,
    }

    console.log('result is ' + JSON.stringify(buffer));
    // let owner: UserFormData = {
    //   name: ownerFormValue.name,
    //   dateOfBirth: ownerFormValue.dateOfBirth,
    //   address: ownerFormValue.address
    // }
  }

  resetForm(){
    this.myForm.reset();
  }
}
