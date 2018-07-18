import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent  {

    pessoas = [
      {nome: 'Rômulo de Queiróz', email: 'romulodequeirozbrt@hotmail.com', data_nascimento: '12/09/1988', ativo: true},
      {nome: 'Rômulo de Queiróz', email: 'romulodequeirozbrt@hotmail.com', data_nascimento: '12/09/1988', ativo: true},
      {nome: 'Rômulo de Queiróz', email: 'romulodequeirozbrt@hotmail.com', data_nascimento: '12/09/1988', ativo: true},
      {nome: 'Rômulo de Queiróz', email: 'romulodequeirozbrt@hotmail.com', data_nascimento: '12/09/1988', ativo: true}

    ];

}
