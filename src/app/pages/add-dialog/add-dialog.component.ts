import { Component, OnInit } from '@angular/core';
import { Dialog } from '../../dialog';
import { HttpDialogService } from '../../services/http-dialogs.service';
import { Router } from '@angular/router';
//import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit  {
 model: Partial<Dialog> = {};
 sections: string[] = [];

  constructor( private http:HttpDialogService, private httpDialogService :HttpDialogService, private router: Router)  { }

  ngOnInit(): void {
    //this.http.getSections().subscribe(sections =>this.sections = sections)
  }


  send() {
      console.log('Ladies and Gentelemens. This model is ', this.model);
      this.httpDialogService.postDialog(this.model as Dialog).subscribe(

        result => console.log(result),
        error => console.error(error) )
        this.router.navigate(['/dialogs']);
      }
      

  }

