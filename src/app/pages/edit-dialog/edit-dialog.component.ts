import { Component, OnInit, Input } from '@angular/core';
import { Dialog } from '../../dialog';
import { HttpDialogService } from '../../services/http-dialogs.service';
import { Router } from '@angular/router'
import { HttpService } from '../../services/http.service';
import { DialogDetailsComponent } from '../dialogstwo/dialog-details/dialog-details.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  @Input()
  dialogstwo: Dialog;
  dialogOne: Dialog;
  httpService: HttpService;
  model: Partial<Dialog> = {};
  _id: string |null;
  sectionName1: string;
  mymap = new Map<string,string>();
  data = [] as any;
  serviceName1: string|null ='';
  constructor(private http: HttpDialogService, private httpDialogService: HttpDialogService, private route: ActivatedRoute,
    private router: Router) { }
    
  
  ngOnInit(): void {
    
        //this.model.sectionName=this.dialogstwo.sectionName;
    this._id=this.route.snapshot.paramMap.get('_id');
    
    console.log('ngoninit edit dialog this._id ',this._id);

    console.log('getDialog = ',this.httpDialogService.getDialog(this._id!) );
    this.httpDialogService.getDialog(this._id!)
      .subscribe(
        val => {
          this.data.push(val)
          
        
       //console.log('res',Object.values(res))
       
    });
    this.sectionName1 =this.data;
    //console.log('this.data[0].pl', this.data[0].pl)
    console.log('data =', this.data,"object keys =", Object.keys(this.data));
    //console.log('data[0]=', this.data[0].de)
    
      
    
      
      //map((keys,vals)=>this.mymap.set(keys,vals))
      
           
      
      this.httpDialogService.getDialog(this._id!);

       
  }
      


    
  
  

  send(_id:string |null, dialogOne:Dialog) {
    const dialog1: Dialog = {
      _id: this._id!,
      sectionName : this.model.sectionName!,
      textName : this.model.textName!,
      pl: this.model.pl!,
      en: this.model.en!,
      de: this.model.de!
    };

    console.log('Gentelemens and Ladies. This model is ', this.model, '  and dialog1:',dialog1);
    console.log('this._id ',this._id );
   
    this.httpDialogService.patchDialog(dialog1 as Dialog).subscribe(

      result => console.log(result),
      error => console.error(error)

    )
    this.router.navigate(['/dialogs']);
  }

}
