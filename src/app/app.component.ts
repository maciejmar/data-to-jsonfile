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
  dialogName:string ='';
  fileName:string[]=[];
  textDuration:number[]=[];
  characterName:string[]=[];
  characterSprite:string='';
  pl:string='';
  en:string='';
  de:string='';

  dialogs: Dialog[];
  dialog = dialogData;




createDialog() {
  const dialog:Dialog = {
    dialogName:this.dialogName,
      segments:[{
      fileName:this.fileName,
      textDuration:this.textDuration,
      characterName:this.characterName,
      characterSprite:this.characterSprite,
      pl:this.pl,
      en:this.en,
      de:this.de
      }]
  }

  this.dialogs.push(dialog);


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

