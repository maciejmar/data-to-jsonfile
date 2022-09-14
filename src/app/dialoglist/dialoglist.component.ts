import { Component, OnInit, Input } from '@angular/core';
import { Dialog } from '../dialog';
import { DialogstwoComponent } from '../pages/dialogstwo/dialogstwo.component';
import dialogData from './dialoglist.json'


@Component({
  selector: 'app-dialoglist',
  templateUrl: './dialoglist.component.html',
  styleUrls: ['./dialoglist.component.css']
})
export class DialoglistComponent implements OnInit {

  isClicked=false;
  @Input() dialogs: Dialog[] = dialogData;

  constructor() { }

  ngOnInit(): void {
  }



  buttonClicked (){
  this.isClicked = !this.isClicked;
  console.log('isClicked=',this.isClicked);
  }
}
