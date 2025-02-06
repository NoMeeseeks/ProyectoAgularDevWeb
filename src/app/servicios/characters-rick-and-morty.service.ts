import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as http from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class CharactersRickAndMortyService {

  constructor(
    http: HttpClient
  ) { }

  obtenerPersonajes(){
    return http.get('https://rickandmortyapi.com/api/character')
  }
}
