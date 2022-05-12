import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  _url ='https://api.apilayer.com/exchangerates_data/convert?to=clp&from=usd&amount=1'

  constructor(
    private http:HttpClient
  ) {
    console.log('Servicio Dolar')
  }
  getDolar(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json',)
    return this.http.get(this._url,{
      headers: header
    });

  }


}
