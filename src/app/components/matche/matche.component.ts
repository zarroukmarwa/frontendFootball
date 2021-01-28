import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {
  @Input() m: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();

  constructor(private matchService:MatchService) { }

  ngOnInit() {
  }

  compare(x: number, y: number) {
    if (x > y) {
      return 'green';
    }
    else if (x < y) {
      return 'red';
    } else {
      return 'blue';
    }
  }

  result(x: number, y: number) {
    if (x > y) {
      return 'win';
    }
    else if (x < y) {
      return 'loss';
    } else {
      return 'draw';
    }
  }
  
  deleteMatch(id:number){
    this.matchService.deleteMatch(id).subscribe(
      ()=> {
        console.log('Match deleted');
        this.matchService.getAllMatches().subscribe(
          (data) => {
            this.newMatches.emit(data);
          }
        )
      }
    )
  }
}
