import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>()
  @Output() cleanInterval = new EventEmitter<string>()
  numbers = 0;
  seconds = 0;
  myInterval;
  constructor() { }

  ngOnInit() {

  }

  startGame() {
  	this.seconds = 0;
  	this.myInterval = setInterval(function() {
  		this.seconds = this.seconds + 1;
  		console.log(this.seconds);
  		this.intervalFired.emit(this.seconds);
	}.bind(this), 1000);
  }

  stopGame() {
  	clearTimeout(this.myInterval);
  	console.log("stopGame");
	this.cleanInterval.emit("clean");
  }
}
