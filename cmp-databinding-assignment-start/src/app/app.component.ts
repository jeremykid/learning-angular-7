import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	list = [];

	onIntervalFired(seconds: number) {
		console.log(seconds);
  		this.list.push({
	  		type: seconds%2 ? 'Odd' : 'Even',
	  		seconds: seconds
  		});
	}

	onCleanInterval(message:any){
		console.log(message);
		this.list = [];
	}
}
