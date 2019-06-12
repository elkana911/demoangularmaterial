import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangularmaterial';

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      { label: 'Card', link: './card', index: 0 },
      { label: 'Checkbox', link: './checkbox', index: 1 },
      { label: 'Combo Box', link: './combobox', index: 2 },
      { label: 'Expandable', link: './expandable', index: 3 },
      { label: 'Form', link: './form', index: 4 },
      { label: 'IconGrid', link: './icongrid', index: 5 },
      // { label: 'Multiple Upload', link: './multipleupload', index: 5 },
      { label: 'ListView', link: './listview', index: 6 },
      { label: 'Right Panel', link: './rightpanel', index: 7 },
      { label: 'Slider Toggle', link: './slidertoggle', index: 8 },
      { label: 'Snackbar', link: './snackbar', index: 9 },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}