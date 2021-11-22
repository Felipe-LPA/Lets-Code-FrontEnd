import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  ngOnInit(): void {
    // console.log(this.hobbies)
  }
  constructor() { }
  @Output() showHobbiesEmitter = new EventEmitter<boolean>();
  @Output() textEmitter = new EventEmitter<string>();
  showingHobbies:boolean = false;
  showUsTheHobbies(){
    this.showingHobbies = !this.showingHobbies
    this.showHobbiesEmitter.emit(this.showingHobbies);
  }
  createHobbies(hobbie: HTMLInputElement){
    // this.textEmitter = hobbie.value]

    this.textEmitter.emit(hobbie.value)
    hobbie.value = ''
    // console.log(hobbie)
  }
}
