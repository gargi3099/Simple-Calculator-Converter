import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  number1=""
  number2=""
  result=0
  action=""
  constructor() { }

  ngOnInit() {
  }

  add(){
   this.action="addition"
   this.result= +this.number1 + +this.number2
   this.number1=""
   this.number2=""
  }

  subtract(){
    this.action="subtraction"
    this.result= +this.number1 - +this.number2
    this.number1=""
    this.number2=""
  }

  multiply(){
    this.action="multiplication"
    this.result= +this.number1 * +this.number2
    this.number1=""
    this.number2=""
  }

  divide(){
    this.action="division"
    this.result= +this.number1 / +this.number2
    this.number1=""
    this.number2=""
  }
}
