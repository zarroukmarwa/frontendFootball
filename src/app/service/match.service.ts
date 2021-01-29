import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  macthUrl = 'https://zarrouk-backend.herokuapp.com/api/matches';
  constructor(private httpClient: HttpClient) { }

  getAllMatches() {
    return this.httpClient.get(this.macthUrl);
  }
  getMatchById(id: any) {

    return this.httpClient.get(`${this.macthUrl}/${id}`);
  }
  deleteMatch(id: any) {
    return this.httpClient.delete(`${this.macthUrl}/${id}`);

  }
  updateMatch(match: any) {
    return this.httpClient.put(`${this.macthUrl}/${match.id}`, match);

  }
  addMatch(match: any) {
    return this.httpClient.post(this.macthUrl, match);
  }
}
