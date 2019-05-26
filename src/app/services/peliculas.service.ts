import { Injectable } from '@angular/core';
import { Pelicula } from 'src/models/pelicula.model';

import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
import { createHostListener } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private key = 'f12ba140';
  private url = `http://www.omdbapi.com/`;
  public pelicula;

  constructor( private http: HttpClient) {

    this.getPeliculas();
  }

  getPeliculas( title: string = '') {

    if ( title === '' ) {
      this.pelicula = null;
      return;
    }

    const url = this.url + `/?apikey=${this.key}&t=${title}&type=movie&plot=full&r=json&`;

    return this.http.get(  url ).subscribe(
      (data: any) => {
        if ( data.Error === 'Movie not found!')  {
          this.pelicula = {
            Title: 'Pelicula no encontrada',
            Error: true
          };
        } else {
          this.pelicula = data;
        }
      }
    );
  }


}
