import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from 'src/models/pelicula.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {

  // private pelicula;

  constructor( private peliculasSrv: PeliculasService) { }

  favoritosAdd() {

  }

}
