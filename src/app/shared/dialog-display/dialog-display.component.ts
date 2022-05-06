import { Component, Input, OnInit } from '@angular/core';
import { Dialog } from '../../dialog'

@Component({
  selector: 'app-dialog-display',
  templateUrl: './dialog-display.component.html',
  styleUrls: ['./dialog-display.component.css']
})
export class DialogDisplayComponent  {
@Input() dialogstwo:Dialog;


ngOninit():void {
  console.log('dialogstwo ------',this.dialogstwo);
  }

}
