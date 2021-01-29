import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl =    'http://localhost:8080/api/players';
  ;
  constructor(private httpClient: HttpClient) { }



  getAllPlayer() {
    return this.httpClient.get(this.playerUrl);
  }
  getPlayerById(id: any) {

    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }
  deletePlayer(id: any) {
    return this.httpClient.delete(`${this.playerUrl}/${id}`);

  }
  updatePlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/${player.id}`, player);

  }
  addPlayer(player: any) {
    return this.httpClient.post(this.playerUrl, player);
  }
}

