import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  amount=""
  result=""
  res=0
  currency=""
  constructor() { }

  ngOnInit() {
  }

   convert(){
    if(this.currency=='Rupees'){
      this.res= +this.amount / 75
      this.result='$'+this.res
    }
    else if(this.currency=='Dollars'){
      this.res= +this.amount * 75
      this.result='₹'+this.res
    }
    this.amount=""
    this.currency=""
  }
}
