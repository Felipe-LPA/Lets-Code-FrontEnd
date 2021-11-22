import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rebimboca',
  templateUrl: './rebimboca.component.html',
  styleUrls: ['./rebimboca.component.scss']
})
export class RebimbocaComponent implements OnInit {
  text1 = 'is awesome'
  @Input() text:string =''
  @Output() textEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
    this.textEmitter.emit('parafuseta')
  }

}
