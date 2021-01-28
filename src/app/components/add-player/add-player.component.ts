import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {
  players: any = {};

  addplayerform!: FormGroup 
constructor(private formBuilder:FormBuilder,
  private router: Router,
    private playerService: PlayerService) { }

ngOnInit() : void {
  this.addplayerform = this.formBuilder.group ({
    playerName: ['', [Validators.minLength(5), Validators.required]],
    numPlayer: ['',[ Validators.required]],
    postePlayer: ['',[ Validators.required]],
    teamPlayer: ['',[ Validators.required]]
  })
}
addPlayer() {
  // alert ('btn cliked')
   console.log({
		"numPlayer":this.addplayerform.controls.numPlayer.value,
		"postePlayer":this.addplayerform.controls.postePlayer.value,
		"teamPlayer":this.addplayerform.controls.teamPlayer.value,
		"playerName":this.addplayerform.controls.playerName.value
	});
  
    this.playerService.addPlayer({
      "numPlayer":this.addplayerform.controls.numPlayer.value,
      "postePlayer":this.addplayerform.controls.postePlayer.value,
      "teamPlayer":this.addplayerform.controls.teamPlayer.value,
      "playerName":this.addplayerform.controls.playerName.value
    }).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }


}
