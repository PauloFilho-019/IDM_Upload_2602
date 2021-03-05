import { Component, OnInit } from '@angular/core';
import { NomeProviderService } from '../../nome-provider.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  id : any;
  chamados: any;

  constructor(public servidor:  NomeProviderService, public activate: ActivatedRoute) { }

  ngOnInit() {}

  warever(){
   const service = new NomeProviderService(new HttpClient());

  }

  ionViewWillEnter() {
    this.activate.queryParams.subscribe(params => {
        if (params && params.id) {
          this.id = JSON.parse(params.id);
          console.log(params);
        }
    });
    this.getRetornar();
  } 
  getRetornar(){
    this.servidor.getPegar("id="+this.id).subscribe(data => {

      this.chamados = data;
      console.log(data)
    });
  }
}
