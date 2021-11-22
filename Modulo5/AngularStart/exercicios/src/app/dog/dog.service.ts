import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }
  getDogsImages(breedName:string){
  return this.http.get(`https://dog.ceo/api/breed/${breedName}/images`)
  .subscribe(dogsImage => dogsImage)
  }
}
