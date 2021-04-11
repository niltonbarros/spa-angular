import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ddsobitos} from '../model/ddsobitos'
import {regioes} from '../model/regioes'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  listaObitos: ddsobitos[] = [
    { genero: 'Homem', percentual: '55%', obs: 'Variação entre 75 à 95 anos' },
    { genero: 'Mulher', percentual: '44%', obs: 'Variação entre 65 à 55 anos' },
    { genero: 'Criança', percentual: '1%', obs: '1 caso de 12 anos' },
  ];

listaregioes: regioes[] = [
  { znorte: '30%', zsul: '15%', zleste:'10%', zoeste: '25%', centro: '20%' },
];


  ngOnInit(): void {

  }

}
