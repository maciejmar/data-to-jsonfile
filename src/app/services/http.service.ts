import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dialog } from '../dialog';


@Injectable
({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:3000/dialogs';
  constructor(private httpClient: HttpClient){}

  getDialogs(): Observable<Dialog[]> {
    return this.httpClient.get<Dialog[]>('http://localhost:3000/dialogs')
  }

  getDialog(_id: string): Observable<Dialog>{
    return this.httpClient.get<Dialog>('http://localhost:3000/dialogs/' + _id);
  }

  getSections(): Observable<string[]>{
    return this.httpClient.get<string[]>('http://localhost:3000/sections')
  }
  getDialogsFromSection(section:string): Observable<Dialog[]>{
    return this.getDialogs().pipe(
      map(dialogs => dialogs.filter(dialog => dialog.sectionName === section))
    );
  }
  postDialog(dialogstwo: Dialog){
    return this.httpClient.post<Dialog>('http://localhost:3000/dialogs + dialogstwo._id', dialogstwo)
  }
 
  deleteDialog(dialogstwo: Dialog){
    return this.httpClient.delete<Dialog>('http://localhost:3000/dialogs' + dialogstwo._id);
  }

}
