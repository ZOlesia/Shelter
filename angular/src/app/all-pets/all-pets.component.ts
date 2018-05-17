import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection


@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  allPets:any;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    ){}

  ngOnInit() {
    this.showAll();
  }
  showAll(){
    let observable = this._httpService.showPets();
    observable.subscribe(data => {
      console.log(data);
      this.allPets = data['pets'];
    })
  }
}
