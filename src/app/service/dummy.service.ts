import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
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

  userList: User[] = []

  constructor(private httpService:HttpClient) { }

  changeMessage(message: string) {
    this.messageObjectSubject.next(message)
  }



  getUserFromApi():Observable<object>{


    return this.httpService.get(this.baseUrl)

  }

  getDummyUsers(): Observable<User[]> {

    let car1 = { "name": "Benz Mercedes" }
    let car2 = { "name": "Audi" }

    let user1 = { "id": 1, "name": "edi" ,"car":car1}

    let user2 = { "id": 2, "name": "mondi" ,"car":car2}

    let user3 = { "id": 3, "name": "lenci" ,"car":car1}

    this.userList = [user1, user2, user3]

    var myUserList$ = of(this.userList)
    
    return myUserList$
  }

  addUserToList(user:User){
    this.userList.push(user)
  }

  getUserCars(): Car[] {

    let car1 = { "name": "Benz Mercedes" }
    let car2 = { "name": "Audi" }

    let carlist = [car1, car2]

    return carlist
  }


}
