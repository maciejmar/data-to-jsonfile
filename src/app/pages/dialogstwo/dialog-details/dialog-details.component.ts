import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Dialog } from '../../../dialog';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent implements OnInit {
dialogDisplay: Observable<Dialog>
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
  goToDialogs(){}
}
