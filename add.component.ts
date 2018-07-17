import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
number1:number;
number2:number;
add(a:NgForm){
  this.number1=a.value.n1;
  this.number2=a.value.n2;
  alert(this.number1*1 + this.number2*1);
}
}
