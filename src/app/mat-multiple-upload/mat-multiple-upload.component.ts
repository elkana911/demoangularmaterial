import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mat-multiple-upload',
  templateUrl: './mat-multiple-upload.component.html',
  styleUrls: ['./mat-multiple-upload.component.css']
})
export class MatMultipleUploadComponent implements OnInit {

  // uploadForm: FormGroup;

  // public uploader:FileUploader = new FileUploader({
  //   isHTML5: true
  // });

  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder, private http: HttpClient ) { }

  ngOnInit() {
  }

}
