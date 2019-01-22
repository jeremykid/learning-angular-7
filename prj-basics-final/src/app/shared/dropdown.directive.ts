import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropDownDirective{
	@HostBinding('class.open') isOpen = false;

	//open css class

	constructor() {

	}

	@HostListener('click') toggleOpen() {
		console.log("click");
		this.isOpen = !this.isOpen;
	}

}