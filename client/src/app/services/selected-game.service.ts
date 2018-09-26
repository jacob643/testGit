import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedGameService {

  id: number;

  constructor() { }

  changeID(id: number){
    this.id = id;
  }
}
