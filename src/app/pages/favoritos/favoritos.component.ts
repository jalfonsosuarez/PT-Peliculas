import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.sass']
})
export class FavoritosComponent implements OnInit {

  private favoritas: Pelicula[] = [];

  constructor() { }

  ngOnInit() {

    this.favoritas = JSON.parse(localStorage.getItem( 'favoritas' ));
    console.log(this.favoritas);

  }

}
