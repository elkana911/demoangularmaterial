import { Component, OnInit, Injectable } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-mat-listview',
  templateUrl: './mat-listview.component.html',
  styleUrls: ['./mat-listview.component.css']
})
export class MatListviewComponent implements OnInit {
  cars = [];

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.cars = [{ name: 'toyota', giphyUrl: '' }
    , { name: 'Honda', giphyUrl: '' }
    , { name: 'Honda', giphyUrl: '' }
  ];

    for (const car of this.cars) {
      this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
    }

  }

}

