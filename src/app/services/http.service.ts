import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dialog } from '../dialog';
import { environment } from '../../environments/environment';


@Injectable
({
  providedIn: 'root'
})
export class HttpService {
  private url :string;
  private url_s: string;
  constructor(private httpClient: HttpClient){
    this.url = environment.URL_DIALOGS;
    this.url_s = environment.URL_SECTIONS;
  }

  getDialogs(): Observable<Dialog[]> {
    return this.httpClient.get<Dialog[]>(this.url)
  }

  getDialog(_id: string): Observable<Dialog>{
    return this.httpClient.get<Dialog>(this.url + _id);
  }

  getSections(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.url_s)
  }
  getDialogsFromSection(section:string): Observable<Dialog[]>{
    return this.getDialogs().pipe(
      map(dialogs => dialogs.filter(dialog => dialog.sectionName === section))
    );
  }
  postDialog(dialogstwo: Dialog){
    return this.httpClient.post<Dialog>(this.url + dialogstwo._id, dialogstwo)
  }

  deleteDialog(dialogstwo: Dialog){
    return this.httpClient.delete<Dialog>(this.url + dialogstwo._id);
  }

}
