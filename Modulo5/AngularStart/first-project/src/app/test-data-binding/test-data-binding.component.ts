import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-data-binding',
  templateUrl: './test-data-binding.component.html',
  styleUrls: ['./test-data-binding.component.scss']
})
export class TestDataBindingComponent implements OnInit {
  showElement = true
  constructor() { }

  ngOnInit(): void {
  }
  getChoice = (value:boolean) => {
    this.showElement = value
    console.log(value)
  }

}
