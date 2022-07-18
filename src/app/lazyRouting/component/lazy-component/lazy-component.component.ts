import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css']
})
export class LazyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("lazy component call is here ");
    
  }

}
