import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
