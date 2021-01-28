import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactt',
  templateUrl: './contactt.component.html',
  styleUrls: ['./contactt.component.css']
})
export class ContacttComponent implements OnInit {
  contacttForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contacttForm=this.formBuilder.group({
      FirstName:[''],
      LastName:[''],
      Email:[''],
      Subject:['']
      

    })
  }
  contactt(){
    alert ('btn clicked')
  }

  }


