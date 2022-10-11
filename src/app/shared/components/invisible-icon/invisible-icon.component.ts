import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-invisible',
	templateUrl: './invisible-icon.component.svg',
	styles: [`
		:host {
			cursor: pointer;
			user-select: none;
			display: flex;
		}
	`]
})
export class InvisibleIconComponent {

	@Input() color: string = '#000000';

}