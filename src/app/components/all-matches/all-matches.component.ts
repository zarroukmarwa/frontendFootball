import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
  matches: any;

  constructor(private matchService:MatchService) { }
  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    );
  }
  updateMatches(x:any){
    this.matches = x;
  }
}
