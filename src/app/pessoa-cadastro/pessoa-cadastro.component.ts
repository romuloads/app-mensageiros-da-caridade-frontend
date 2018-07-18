import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pt: any;
  ativoDesativo: any;
  tiposPessoa: any;

  constructor() { }

  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["Do","Se","Te","Qa","Qi","Se","Sá"],
      monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar'
    };
    this.ativoDesativo = [
      { label: 'Ativo', value: 'true' },
      { label: 'Desativo', value: 'false' },
    ];
    this.tiposPessoa = [
      { label: 'Frequentador', value: 'FREQUENTADOR' },
      { label: 'Trabalhador', value: 'TRABALHADOR' },
      { label: 'Administrador', value: 'ADMINISTRADOR' },
    ]
  }

}
