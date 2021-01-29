import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-all-player',
  templateUrl: './all-player.component.html',
  styleUrls: ['./all-player.component.css']
})
export class AllPlayerComponent implements OnInit {
  players:any;
  

  constructor(private playerservice:PlayerService) { }

  ngOnInit() {
    this.playerservice.getAllPlayer().subscribe(
      data =>{
        this.players = data ; 
      }
     
    )

  }

}
