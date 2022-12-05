import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  Myforms:any
  constructor() { }

  ngOnInit(): void {
   
   
 
  }


  myformsubmit = ()=>{

    const Myforms = new FormGroup({
      first: new FormControl(''),
      second: new FormControl(''),
    });
    console.log(Myforms);


  }




}
