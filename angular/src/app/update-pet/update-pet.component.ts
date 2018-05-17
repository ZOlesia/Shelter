import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {
  updatePet: any;
  petId: string;
  skill1;
  skill2;
  skill3;
  err;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
      this._route.params.subscribe((params: Params) => {
      this.petId = params['id'];
      this.showPet(this.petId);
    })
    // this.updatePet = {name: "", type: "", description: "", skills: []};
}

  showPet(id){
    let observable = this._httpService.showOne(this.petId);
    observable.subscribe(data => {
      this.updatePet = data['pet'];
      this.skill1 = this.updatePet.skills[0];
      this.skill2 = this.updatePet.skills[1];
      this.skill3 = this.updatePet.skills[2];
    })
  }

  updateOnePet(){
    this.updatePet.skills[0] = this.skill1;
    this.updatePet.skills[1] = this.skill2;
    this.updatePet.skills[2] = this.skill3;
    let observable = this._httpService.updatePet(this.petId, this.updatePet);
    observable.subscribe(data => {
      if(!data['err']){
        this._router.navigate(['/pets/details/' + this.petId])
      } else {
        this.err = data['err'].errors.name.message;
        this._router.navigate(['/pets/edit/' + this.petId])
      }
    })
  }
}
