import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-dados-ld-direito',
  templateUrl: './dados-ld-direito.component.html',
  styleUrls: ['./dados-ld-direito.component.css']
})
export class DadosLdDireitoComponent implements OnInit {

  constructor() { }

  exibeInf:  boolean = false;

  ngOnInit(): void {
  }

  exibirInf(){
    this.exibeInf = true;
  }

  @Input() obtNovo: number = 1;
  @Input() obtAcum: number = 52;
}
