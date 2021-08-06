import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  name!: String;
  id!: String;
  
  constructor() { }

  setName = (name: string) => this.name = name;
  setId = (id: string) => this.id = id;
  
  getName = () => this.name;
  getId=() =>this.id;

}
