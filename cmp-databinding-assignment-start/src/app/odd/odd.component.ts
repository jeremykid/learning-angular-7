import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, AfterViewInit {
  seconds = 0;
  @Input() element = {type: String, seconds: Number};

  constructor() { }

  ngOnInit() {
  	this.seconds = 0;

  }

  ngAfterViewInit() {

  }

}
