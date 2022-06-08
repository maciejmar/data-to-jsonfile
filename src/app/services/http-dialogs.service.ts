import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Dialog } from '../dialog';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
//import { DialogstwoComponent } from '../pages/dialogstwo/dialogstwo';

@Injectable({
  providedIn: 'root',
})
export class HttpDialogService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.URL_DIALOGS;
  }

  getDialogs(): Observable<Dialog[]> {
    return this.http.get<Dialog[]>(this.url).pipe(tap(console.log));
  }

  // Dodatkowe konfiguracje w zapytaniu
  // getMovies(): Observable<HttpResponse<Movie[]>> {
  //   return this.http
  //     .get<HttpResponse<Movie[]>>(this.url, { observe: 'response' })
  //     .pipe(tap(console.log));
  // }

  postDialog(dialogstwo: Dialog): Observable<Dialog> {
    return this.http.post<Dialog>(this.url, dialogstwo).pipe(tap(console.log));
  }
/*
  putMovie(dialogstwo: Dialog): Observable<Dialog> {
    return this.http
      .put<Dialog>(this.url + '/' + dialogstwo.id, dialogstwo)
      .pipe(tap(console.log));
  }
*/
  patchDialog(dialogstwo: Partial<Dialog>): Observable<Dialog> {
    return this.http
      .patch<Dialog>(this.url + '/' + dialogstwo._id, dialogstwo)
      .pipe(tap(console.log));
  }


  deleteDialog(dialogstwo: Dialog): Observable<{}> {
    return this.http.delete<{}>(this.url + '/'+ dialogstwo._id ).pipe(tap(console.log));
  }

  getDialog(_id: string): Observable<{}> {
    return this.http.get<{}>(this.url + '/'+ _id ).pipe(tap(console.log));
  }


  makeError(): Observable<HttpErrorResponse> {
    return this.http
      .delete(this.url + '/' + 999)
      .pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
        `Message: ${error.message} \n` +
        `Returned code: ${error.status} \n`
    );
    return throwError('Something bad happened; please try again later.');
  }

  headers(): Observable<HttpResponse<Dialog[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/json',
      'X-Custom-Header': 'Nicpon',
    });
    return this.http
      .get<Dialog[]>(this.url, { observe: 'response', headers: myHeaders })
      .pipe(
        tap((res: HttpResponse<Dialog[]>) => {
          console.log(res.headers.keys());
          console.log(res.headers.get('Cache-Control'));
          console.log(res.headers.get('Content-Type'));
          console.log(res.headers.get('Expires'));
          console.log(res.headers.get('Pragma'));
        })
      );
  }

  params(): Observable<Dialog> {
    const myParams = new HttpParams()
      .set('_sort', 'sectionName')
      .set('_order', 'textName');
    return this.http
      .get<Dialog[]>(this.url, { params: myParams })
      .pipe(tap(console.log));
  }
}

