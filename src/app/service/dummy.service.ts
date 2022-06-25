import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../model/user';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {


  baseUrl = "https://jsonplaceholder.typicode.com/users"

  private messageObjectSubject = new BehaviorSubject("{}");

  messageObject = this.messageObjectSubject.asObservable();

  constructor(private httpService:HttpClient) { }

  changeMessage(message: string) {
    this.messageObjectSubject.next(message)
  }



  getUserFromApi():Observable<object>{


    return this.httpService.get(this.baseUrl)

  }

  getDummyUsers(): User[] {

    let car1 = { "name": "Benz Mercedes" }
    let car2 = { "name": "Audi" }

    let user1 = { "id": 1, "name": "edi" ,"car":car1}

    let user2 = { "id": 2, "name": "mondi" ,"car":car2}

    let user3 = { "id": 3, "name": "lenci" ,"car":car1}

    let userList: User[] = [user1, user2, user3]

    return userList
  }

  getUserCars(): Car[] {

    let car1 = { "name": "Benz Mercedes" }
    let car2 = { "name": "Audi" }

    let carlist = [car1, car2]

    return carlist
  }


}
