import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, of } from 'rxjs';
import { DummyService } from '../../service/dummy.service';
import { User } from '../../model/user';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy {

  subscription!: Subscription;
  
  message!: string

  userFromForm!:User

  userList$!: Observable<User[]>;
  
  userList:User[] = []

  
  constructor(private dummyService:DummyService) {

    this.userList$ = dummyService.getDummyUsers()
   }
  

  ngOnInit(): void {

    this.getUserFromMessage()
   
  }

  getUserFromMessage(){

    
    this.subscription = this.dummyService.messageObject.subscribe(message => {
      this.userFromForm = JSON.parse(message) 
    })

  }

  addReceivedUserToUserList(){

    
    
    this.dummyService.addUserToList(this.userFromForm)
   
  }

  ngOnDestroy(){

    this.subscription.unsubscribe()

  }


}
