import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
