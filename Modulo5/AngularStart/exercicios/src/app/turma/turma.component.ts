import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {
@Input() text: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
