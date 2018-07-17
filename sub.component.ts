import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  number1:number;
  number2:number;
  add(a:NgForm){
    this.number1=a.value.n1;
    this.number2=a.value.n2;
    alert(this.number1 - this.number2);
  }
}
