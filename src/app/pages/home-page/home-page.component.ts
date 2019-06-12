import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {


  private peliculas: Pelicula[] = [];

  constructor( private peliculasSrv: PeliculasService) { }

  ngOnInit() {

    this.peliculas = JSON.parse( localStorage.getItem( 'favoritas' ) );
    if ( this.peliculas === null ) {
      this.peliculas = [];
    }

  }

  favoritosAdd( pelicula: Pelicula ) {

    this.peliculas.push( pelicula );
    localStorage.setItem( 'favoritas', JSON.stringify( this.peliculas ) );

  }

}
