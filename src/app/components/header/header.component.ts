import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  private tituloBuscar: string;

  constructor( private peliculaSrv: PeliculasService) { }

  buscar() {

    this.peliculaSrv.getPeliculas(this.tituloBuscar);

  }

}
