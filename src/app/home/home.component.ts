import { Component, OnInit } from '@angular/core';
import { VerDadosService } from '../ver-dados.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  UserName = this.route.snapshot.queryParams['UserName'];
  items = this.verDados.coletarDados(); 

  constructor(
    private verDados: VerDadosService,
    private route: ActivatedRoute
    
  ) {  }
 
}
