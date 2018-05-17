import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet = {name: "", type: "", description: "", skills: []};
  skill1: string;
  skill2: string;
  skill3: string;
  err;

  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skills: []};
  }
  addOnePet(){
    this.newPet.skills.push(this.skill1, this.skill2, this.skill3);
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      if(!data['err']){
      console.log(this.newPet.skills);
      console.log(data);
      this.newPet = {name: "", type: "", description: "", skills: []};
      this._router.navigate(['/pets'])
      } else{
        this.err = data['err'].errors.name.message;
        this._router.navigate(['/pets/new']);
      }
    })
  }
}
