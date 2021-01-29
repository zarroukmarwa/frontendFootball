import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css']
})
export class EditAddComponent implements OnInit {
  match:any={};
  loginForm!:FormGroup;
  id:any;
  click: any ;
  constructor(private fb:FormBuilder, 
    private matchService:MatchService,  
    private router:Router,
    private routerAct:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.fb.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    }) ;
    this.id = this.routerAct.snapshot.paramMap.get('id');
    if(this.id != null){
      this.matchService.getMatchById(this.id).subscribe(
        (data) =>
        {
           this.match= data ;
        }
      )
      this.click='Edit Match';
    } else {
      this.click='Add Match'
    }
    
  }
  AddMatch(){
    this.matchService.addMatch(this.match).subscribe(
      ()=>{
      this.router.navigate(['admin']);
      }
    )
  }
  EditMatch(){
    this.matchService.updateMatch(this.match).subscribe(
      ()=> {
        this.router.navigate([`admin`]);
      }
    )
  }
  AddEditMatch(){
    this.id = this.routerAct.snapshot.paramMap.get('id');
    console.log('id', this.id);
    if(this.id == null){
      console.log('add', this.id);
      this.AddMatch();
    } else {
      console.log('edit', this.id);
      this.EditMatch();
    }
}

}