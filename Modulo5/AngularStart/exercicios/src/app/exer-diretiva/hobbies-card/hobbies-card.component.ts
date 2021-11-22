import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hobbies-card',
  templateUrl: './hobbies-card.component.html',
  styleUrls: ['./hobbies-card.component.scss']
})
export class HobbiesCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hobbie:string = ''

}
