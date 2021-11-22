import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
// name1: any ='';
father: any ='';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.name1 = new FormControl('')
  //   this.father = new FormGroup({
  //     name: new FormControl(''),
  //     lastName: new FormControl('')
  // })
  this.father = this.fb.group({
    name: ['', Validators.required],
    lastName: ['']
  })
  }
  // showUsProperties(){
  //   console.log(this.name1.value)
  // }


  showFormValue(){
    console.log(this.father)
  }
}
