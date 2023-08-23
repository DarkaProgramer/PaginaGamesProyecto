import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Games } from '../models/Games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {


  API_URL= 'http://localhost:3000/api' ;
  API_URI = 'http://localhost:3000/src/data'


  constructor(private http : HttpClient) { }

  getGames(){
    return this.http.get(`${this.API_URI}/games`)
  }


  getGame(id : string){
    return this.http.get(`${this.API_URI}/games/${id}`)
  }

saveGames(game: Games){
  return this.http.post(`${this.API_URI}/games`,game)
}
deleteGame(id: string){
  return this.http.delete(`${this.API_URI}/games/${id}`);
  }
updateGames(id:string, updateGame : Games){
  return this.http.put(`${this.API_URI}/games/${id}`,updateGame);
  }  
}
