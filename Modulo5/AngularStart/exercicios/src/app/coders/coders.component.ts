import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.scss']
})
export class CodersComponent implements OnInit {

  coders = 'Eu sou um coders'
  @Output() textEmitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

    this.textEmitter.emit(this.coders)
  }

}
