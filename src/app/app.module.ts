import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTabsModule, MatCardModule, MatButtonModule, MatSnackBarModule, MatCheckboxModule, MatSlideToggleModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatListModule, MatExpansionModule } from '@angular/material';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatSnackbarComponent } from './mat-snackbar/mat-snackbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { MatSlidertoggleComponent } from './mat-slidertoggle/mat-slidertoggle.component';
import { SlidertoggleService } from './slidertoggle.service';
import { ComboboxComponent } from './combobox/combobox.component';
import { FormComponent } from './form/form.component';
import { MatMultipleUploadComponent } from './mat-multiple-upload/mat-multiple-upload.component';
import { MatRightpanelComponent } from './mat-rightpanel/mat-rightpanel.component';
import { MatIcongridComponent } from './mat-icongrid/mat-icongrid.component';
import { MatExpandableviewComponent } from './mat-expandableview/mat-expandableview.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListviewComponent } from './mat-listview/mat-listview.component';
import { MatListdialogComponent } from './mat-listdialog/mat-listdialog.component';
import { GiphyService } from './giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    MatCardComponent,
    MatSnackbarComponent,
    MatCheckboxComponent,
    MatSlidertoggleComponent,
    ComboboxComponent,
    FormComponent,
    MatMultipleUploadComponent,
    MatRightpanelComponent,
    MatIcongridComponent,
    MatExpandableviewComponent,
    MatListviewComponent,
    MatListdialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule, 
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SlidertoggleService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
