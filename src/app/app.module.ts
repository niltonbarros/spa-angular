import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DadosPrincipaisComponent } from './dados-principais/dados-principais.component';
import { DadosLdEsquerdoComponent } from './dados-ld-esquerdo/dados-ld-esquerdo.component';
import { DadosLdDireitoComponent } from './dados-ld-direito/dados-ld-direito.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DadosPrincipaisComponent,
    DadosLdEsquerdoComponent,
    DadosLdDireitoComponent,
      ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
