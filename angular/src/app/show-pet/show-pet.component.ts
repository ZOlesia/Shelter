import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; // dependency injection
import { ActivatedRoute, Params, Router } from '@angular/router'; //for the routes
@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {
  petId: string;
  pet: any;
  constructor(private _httpService: HttpService,
    //these 2 lines are for the routes
    private _route: ActivatedRoute,
    private _router: Router
    ){}

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
      this.petId = params['id'];
    })
    this.showPet(this.petId);
  }
  
  showPet(id){
    let observable = this._httpService.showOne(this.petId);
    observable.subscribe(data => {
      this.pet = data['pet'];
      console.log(this.pet)
    })
  }

  delete(){
    console.log(this.petId);
    let observable = this._httpService.deleteOnePet(this.petId);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/pets']);
    })
  }

  like(){
    console.log(this.petId);
    this.pet.likes ++;
    let observable = this._httpService.likePet(this.petId, this.pet);
    observable.subscribe(data => {
      console.log(data);
    })
  }
}
