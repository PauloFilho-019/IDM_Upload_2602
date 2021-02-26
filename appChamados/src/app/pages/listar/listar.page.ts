import { Component, OnInit } from '@angular/core';
import { NomeProviderService } from '../../nome-provider.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  chamados: any;
  
  constructor(public servidor:  NomeProviderService) { }

  ngOnInit() {
    this,this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar("id=0").subscribe(data => {

      this.chamados = data;
    });
  }
}
