import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-dados-principais',
  templateUrl: './dados-principais.component.html',
  styleUrls: ['./dados-principais.component.css']
})
export class DadosPrincipaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() populacaoMk: string = '47.150';
  @Input() recuperados: number = 1949;
  @Input() acompanhamento: number = 49;

}
