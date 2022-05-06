import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Dialog } from '../../dialog'

@Component({
  selector: 'app-dialogstwo',
  templateUrl: './dialogstwo.component.html',
  styleUrls: ['./dialogstwo.component.css']
})
export class DialogstwoComponent implements OnInit {

  dialogstwo: Observable<Dialog[]>;


  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.dialogstwo = this.http.getDialogs();
    
  }

}
