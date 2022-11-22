

import { Component, EventEmitter,Input,Output, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import {Dialog} from  '../../../dialog';
import { HttpDialogService } from '../../../services/http-dialogs.service';
import { Router } from '@angular/router'
import { HttpService } from '../../../services/http.service';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map,find, catchError } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent  {

  @Input() dialogOne:Dialog;

constructor(private fb:FormBuilder,private http: HttpService){}

form = this.fb.group({
  segments: this.fb.array([])
});


get segments (){
  return this.form.controls["segments"] as FormArray
}



}
