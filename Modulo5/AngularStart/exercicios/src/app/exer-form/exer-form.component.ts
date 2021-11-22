import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-exer-form',
  templateUrl: './exer-form.component.html',
  styleUrls: ['./exer-form.component.scss']
})
export class ExerFormComponent implements OnInit {
  father:any = ''
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.father = this.fb.group({
      email: ['', [ Validators.email, Validators.required ]],
      password:['', [ Validators.minLength(8), Validators.required ]]
    })
  }
  something(){
    console.log(this.father)
  }
}
