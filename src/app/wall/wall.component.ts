import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
a:string = "dicat india noida";
b:string = '10/20/2022';

x:number[]=[10,20,50,60,70,80,90,40,50,60,30,20,10];

xyz=[
  {name:'ravi',age:50},
  {name:'mohan',age:20},
  {name:'kumar',age:60},
  {name:'mohit',age:90},
  {name:'pankaj',age:20}
]


// c:null=null
// c:boolean = false;
// c:boolean = 60>90
c:boolean = this.x.length>10
  constructor() { }

  ngOnInit(): void {
  }

}
