import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatSlidertoggleComponent } from './mat-slidertoggle/mat-slidertoggle.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { FormComponent } from './form/form.component';
import { MatMultipleUploadComponent } from './mat-multiple-upload/mat-multiple-upload.component';
import { MatExpandableviewComponent } from './mat-expandableview/mat-expandableview.component';
import { MatIcongridComponent } from './mat-icongrid/mat-icongrid.component';
import { MatRightpanelComponent } from './mat-rightpanel/mat-rightpanel.component';
import { MatListviewComponent } from './mat-listview/mat-listview.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'card', component: MatCardComponent},
  { path: 'checkbox', component: MatCheckboxComponent},
  { path: 'combobox', component: ComboboxComponent},
  { path: 'expandable', component: MatExpandableviewComponent},
  { path: 'form', component: FormComponent},
  { path: 'icongrid', component: MatIcongridComponent},
  { path: 'listview', component: MatListviewComponent},
  { path: 'multipleupload', component: MatMultipleUploadComponent},
  { path: 'rightpanel', component: MatRightpanelComponent},
  { path: 'slidertoggle', component: MatSlidertoggleComponent},
  { path: 'snackbar', component: MatSnackbarComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
