import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DummyService } from '../../service/dummy.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subscription!: Subscription;
  
  message!: string

  userFromForm!:User

  userList:User[] = []
  
  constructor(private dummyService:DummyService) { }

  ngOnInit(): void {

    this.getUserFromMessage()
  
  }

  getUserFromMessage(){

    this.subscription = this.dummyService.messageObject.subscribe(message => {
      this.userFromForm = JSON.parse(message) 
    })
  
  }


  


}
