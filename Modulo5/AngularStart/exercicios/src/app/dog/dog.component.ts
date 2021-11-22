import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DogService } from './dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  constructor(private dogService: DogService) { }
  dogSearch:any = ''
  showMeTheBlur(dog:string) {
    console.log(this.dogService.getDogsImages(dog))
    console.log(dog)
  }

  ngOnInit(): void {
    this.dogSearch = new FormControl('')
  }

}
