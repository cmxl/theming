import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-visible',
	templateUrl: './visible-icon.component.svg',
	styles: [`
		:host {
			cursor: pointer;
			user-select: none;
			display: flex;
		}
	`]
})
export class VisibleIconComponent {

	@Input() color: string = '#000000';

}