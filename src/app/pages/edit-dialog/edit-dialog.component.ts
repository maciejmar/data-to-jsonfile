import { Component, EventEmitter,Input,Output, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Form, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {Dialog} from  '../../dialog';
import { HttpDialogService } from '../../services/http-dialogs.service';
import { Router } from '@angular/router'
import { HttpService } from '../../services/http.service';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map,find, catchError } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  constructor(private fb:FormBuilder,private http: HttpService){}
  signUpForm: FormGroup = this.fb.group({

    segments: this.fb.array([{
      fileName: this.fb.array([]),
      textDuration: this.fb.array([]),
      characterName: this.fb.array([]),
      characterSprite: ['',[]],
      pl: ['',[]],
      en: ['',[]],
      de: ['',[]]

    }])


  });


 languages = 3;
 dialogstwo:  Observable<Dialog[]>;
 dialogName:string ='';
 dialogOne:Dialog = {
  dialogName:'',
  segments:[]
 };
 fileName:string[]=[];
 characterName:string[]=[];
 durationText:number[]=[];
 selected='nichts';
 dialogName1='grutek'
 dialogs: Dialog[] = [];
 email: FormControl;
 buyTicketForm: FormGroup;

 buySegmentForm:FormGroup;

  finishSubmit(){
    this.dialogName1='';
    this.dialogName1='buba'
  }
  doOnClick(elem:any){
    console.log('do on click')
    this.http.getDialogs().pipe(map(dialogs =>
      dialogs.filter(d => d.dialogName === this.dialogOne.dialogName))).
      subscribe((res:Dialog[]) => {
       console.log('res =', res);
       if(res[0]) this.dialogOne = res[0];
       else console.log('there is no res')
      })
  }


  form = this.fb.group({
    segments: this.fb.array([])
  });




  get segmentsControl(){
    return this.signUpForm.get('segments') as FormArray;
    }

segmentsHere(){
  return this.signUpForm.get('segments') as FormArray;
}

segmentFileName(empIndex: number): FormArray {
  return this.segments()
    .at(empIndex)
    .get('fileName') as FormArray;
}



  get segments ():FormArray {
    return <FormArray> this.signUpForm.get('segments')
  }

  onSubmit () {
    console.log('the form is - ',this.signUpForm.value);
   }

    onAddSegment(){
    (this.signUpForm.get('segments') as FormArray).push(this.fb.control(''));
    }






  buySegment() {

    if(this.buySegmentForm.status == 'VALID'){
      console.log("valid submited =", this.buySegmentForm.value);

    }
    else console.log("invalid submited =", this.buySegmentForm.value);
  }



  ngOnInit(): void {
    this.dialogstwo= this.http.getDialogs();




 }

}
