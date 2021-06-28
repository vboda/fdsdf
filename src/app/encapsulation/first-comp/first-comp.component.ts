import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('vhsdjbvnsignvsf loading FirstCOmponent');
  }
  
}
