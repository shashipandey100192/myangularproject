import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
a:string = "dicat india noida";
b:string = '10/20/2022';
  constructor() { }

  ngOnInit(): void {
  }

}
