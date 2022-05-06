import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Dialog } from '../../dialog';
import { HttpDialogService } from '../../services/http-dialogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {


  model: Partial<Dialog> = {};
  _id: string |null;
  sectionName:string;

  constructor( private httpDialogService: HttpDialogService, private router: Router,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this._id=this.route.snapshot.paramMap.get('_id');
    console.log('this._id ',this._id);
    
  }

  send(_id:string |null) {
    const dialog1: Dialog ={
      _id: this._id!,
      sectionName : this.model.sectionName!,
      textName : this.model.textName!,
      pl: this.model.pl!,
      en: this.model.en!,
      de: this.model.de!
    };
  console.log('Gentelemens!!! and Ladies. This model is ', this.model, '  and dialog1:',dialog1,);
  // this.model._id = stringify(this._id);
  //this.model._id = this._id;
  console.log('this._id ',this._id );
  console.log('this.model._id=',this.model._id!);
  //this.model._id!=this._id;
  this.httpDialogService.deleteDialog(dialog1 as Dialog).subscribe(

    result => console.log(result),
    error => console.error(error)

  )
  this.router.navigate(['/dialogs']);
  }

}
