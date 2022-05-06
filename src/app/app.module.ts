import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialoglistComponent } from './dialoglist/dialoglist.component';
import { FormsModule } from '@angular/forms';
import { SectionsComponent } from './pages/sections/sections.component';
import { DialogstwoComponent } from './pages/dialogstwo/dialogstwo.component';
import { DialogInSectionComponent } from './pages/sections/dialog-in-section/dialog-in-section.component';
import { DialogDetailsComponent } from './pages/dialogstwo/dialog-details/dialog-details.component';
import { DialogDisplayComponent } from './shared/dialog-display/dialog-display.component';
import { AddDialogComponent } from './pages/add-dialog/add-dialog.component';
import { EditDialogComponent } from './pages/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './pages/delete-dialog/delete-dialog.component';



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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
