import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidertoggleService {

  checked: boolean = false;

  constructor() { }

  changeChecked(newVal: boolean){
    this.checked = newVal;
  }
}
