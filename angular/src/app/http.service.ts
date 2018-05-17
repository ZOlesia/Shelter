import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Dependency injection

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }  //Dependency injection

  showPets(){
    return this._http.get('/basic');
  }

  addPet(newPet){
    return this._http.post('/basic', newPet);
  }
  
  showOne(id){
    return this._http.get('/basic/' + id);
  }

  
  deleteOnePet(id:string){
    return this._http.delete('/basic/' + id);
  }
  
  likePet(id, pet){
    return this._http.put('/basic/like/' + id, pet);
  }
  
  updatePet(id, updatePet){
    return this._http.put('/basic/edit/' + id, updatePet);
  }
}