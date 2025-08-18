import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {

  apiServiceUrl: string = environment.formspreeApi;

  constructor(private _http: HttpClient) { }

  sendFormData(formData: any): Observable<any> {
    return this._http.post(this.apiServiceUrl, formData, {
      headers: {
        'Accept': 'application/json'
      }
    });
  }

}
