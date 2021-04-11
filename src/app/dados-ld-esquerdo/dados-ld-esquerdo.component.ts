import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-dados-ld-esquerdo',
  templateUrl: './dados-ld-esquerdo.component.html',
  styleUrls: ['./dados-ld-esquerdo.component.css']
})
export class DadosLdEsquerdoComponent implements OnInit {

  constructor() { }

  exibeInf:  boolean = false;

  ngOnInit(): void {
  }

  exibirInf(){
    this.exibeInf = true;
  }

  @Input() casoNovo: number = 70;
  @Input() casoAcum: number = 3950;

}
