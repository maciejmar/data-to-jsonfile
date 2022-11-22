import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialoglistComponent } from './dialoglist/dialoglist.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SectionsComponent } from './pages/sections/sections.component';
import { DialogstwoComponent } from './pages/dialogstwo/dialogstwo.component';
import { DialogInSectionComponent } from './pages/sections/dialog-in-section/dialog-in-section.component';
import { DialogDetailsComponent } from './pages/dialogstwo/dialog-details/dialog-details.component';
import { DialogDisplayComponent } from './shared/dialog-display/dialog-display.component';
import { AddDialogComponent } from './pages/add-dialog/add-dialog.component';
import { EditDialogComponent } from './pages/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './pages/delete-dialog/delete-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShowListComponent } from './pages/edit-dialog/show-list/show-list.component';





@NgModule({
  declarations: [
    AppComponent,
    DialoglistComponent,
    SectionsComponent,
    DialogstwoComponent,
    DialogInSectionComponent,
    DialogDetailsComponent,
    DialogDisplayComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    ShowListComponent,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule, FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
