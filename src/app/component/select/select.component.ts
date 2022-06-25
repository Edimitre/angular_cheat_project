import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/model/car';
import { User } from 'src/app/model/user';
import { DummyService } from '../../service/dummy.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {



  carList: Car[] = []

  userList!: User[]

  selectForm!: FormGroup;

  submitted = false;



  constructor(private dummyService: DummyService) { }

  ngOnInit() {

    this.carList = this.dummyService.getUserCars()

    this.userList = this.dummyService.getDummyUsers()





    this.selectForm = new FormGroup({

      car: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required])

    })



  }

  
  onSubmit(value:any) {


    let myUser = new User()
    let selectedCar = new Car()
    
    selectedCar.name = value.car
    
    myUser.id = value.id
    myUser.name = value.userName
    myUser.car = selectedCar

    this.dummyService.changeMessage(JSON.stringify(myUser))

  }



}
