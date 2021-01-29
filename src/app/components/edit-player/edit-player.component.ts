import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id : any;
  player: any = {};
  playerForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private playerService: PlayerService,
    private activateRouter:ActivatedRoute,) { }

  ngOnInit(): void {

    this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(

      data => {
        this.player = data;
      }
    )
    this.playerForm = this.formBuilder.group({
      playerName: [''],
      numPlayer: [''],
      postePlayer: [''],
      teamPlayer: ['']

    })
  }

  editPlayer() {
    // console.log('here my object', this.match)
    this.playerService.updatePlayer(this.player).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }
  
}

