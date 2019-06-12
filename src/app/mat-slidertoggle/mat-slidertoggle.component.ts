import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SlidertoggleService } from '../slidertoggle.service';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-mat-slidertoggle',
  templateUrl: './mat-slidertoggle.component.html',
  styleUrls: ['./mat-slidertoggle.component.css']
})
export class MatSlidertoggleComponent implements OnInit {

  disabled = false;
  checked: boolean = false;

  constructor(private sliderToggleService: SlidertoggleService) {
    this.checked = sliderToggleService.checked;
  }

  ngOnInit() {
  }

  onChange(value: MatSlideToggleChange){
    this.sliderToggleService.changeChecked(value.checked);
  }
}
