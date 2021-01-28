import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  id: any;
  player: any;
  constructor(
    private activateRouter: ActivatedRoute,
    private playerservice: PlayerService
  ) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.playerservice.getPlayerById(this.id).subscribe(

      data => {
        this.player = data;
      }
    )
    }
  }