import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any;
  players: any;
  constructor(private matchService: MatchService,
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.getMatches();
    this.getPlayer();
  }


  deleteMatchComponent(id: any) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
      }
    )

  }

  getMatches() {
    this.matchService.getAllMatches().subscribe(

      data => {
        this.matches = data;

      }
    )
  }

  getPlayer() {
    this.playerService.getAllPlayer().subscribe(
      data => {
        this.players = data
      }

    )

  }

  deletePlayerComponent(id: any) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.getPlayer();
      }
    )

  }


  goToMatch(id: any) {

    // alert ('ok') ; 
    this.router.navigate([`display-match/${id}`]);
  }
  goToEditMatch(id: any) {

    // alert ('ok') ; 
    this.router.navigate([`edit-match/${id}`]);
  }
  goToPlayer(id: any) {

    // alert ('ok') ; 
    this.router.navigate([`display-player/${id}`]);
  }

  goToEditPlayer(id: any) {

    // alert ('ok') ; 
    this.router.navigate([`edit-player/${id}`]);
  }
  goToAddPlayers(){
    this.router.navigate([`add-player`]);
  }
  goToAddMatches(){
    this.router.navigate([`add-match`]);
  }
}