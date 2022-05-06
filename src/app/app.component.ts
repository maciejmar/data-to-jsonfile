import { Component } from '@angular/core';
import { Dialog } from './dialog';
import dialogData from "./dialoglist/dialoglist.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-to-jsonfile';
  sectionName: string='';
  textName: string='';
  pl:string ='';
  de: string ='';
  en: string ='';
  dialogs: Dialog[] = dialogData;



createDialog() {
  const dialog:Dialog = {
    sectionName:this.sectionName,
    textName:this.textName,
    pl:this.pl,
    en:this.en,
    de:this.de
  }
  this.dialogs.push(dialog);
  this.sectionName ='';
  this.textName='';
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
