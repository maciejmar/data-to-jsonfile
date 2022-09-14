import { Component } from '@angular/core';
import { Dialog } from './dialog';
import { Segment } from './segment'
import dialogData from "./dialoglist/dialoglist.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-to-jsonfile';
  dialogName ='';
  dialogs: Dialog[] = dialogData;

  segment: Segment[];



createDialog() {
  const dialog:Dialog = {
    dialogName:this.dialogName,
    segment:this.segment
  }
  this.dialogs.push(dialog);
  this.fileName ='';
  this.textduration='';
  this.pl = '';
  this.en ='';
  this.de = '';
  const jsonData = JSON.stringify(this.dialogs);
  // (A) CREATE BLOB OBJECT
  var myBlob = new Blob([jsonData], {type: "text/plain"});
  // (B) CREATE DOWNLOAD LINK
  var url = window.URL.createObjectURL(myBlob);
  var anchor = document.createElement("a");
  ///c/Users/NTT/Downloads
  anchor.href = url;
  anchor.pathname = "/c/Users/NTT/Downloads";
  anchor.download = "dialoglist.json";
  // (C) "FORCE DOWNLOAD"
  // NOTE: MAY NOT ALWAYS WORK DUE TO BROWSER SECURITY
  // BETTER TO LET USERS CLICK ON THEIR OWN
  anchor.click();
  window.URL.revokeObjectURL(url);
  document.removeChild(anchor);
}

}
