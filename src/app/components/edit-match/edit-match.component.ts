import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id: any;
  match: any = {};
  matchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private matchService: MatchService,
    private activateRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']

    })
    this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(

      data => {
        this.match = data;
      }
    )
    
  }
  editMatch() {
    // console.log('here my object', this.match)
    this.matchService.updateMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }
  
}