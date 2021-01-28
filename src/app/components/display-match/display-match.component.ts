import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id: any;
  match: any;
  constructor(
    private activateRouter: ActivatedRoute,
    private matchservice: MatchService
  ) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.matchservice.getMatchById(this.id).subscribe(

      data => {
        this.match = data;
      }
    )
  }

}
