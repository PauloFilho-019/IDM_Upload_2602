import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NomeProviderService {

  url: string = "https://projetorrw.000webhostapp.com/src/controll/routes/";

  constructor(public http: HttpClient) {
   
   }

   
   getPegar(parametros: string){

     return this.http.get(this.url+'route.chamados_autonomos.php?'+parametros);
     
   }
}
