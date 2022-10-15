import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	backgroundColor: string = '#000000';
	color: string = '#000000';


	ngOnInit(): void {
		this.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
		this.color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
	}

	changeBackground(color: string): void {
		document.documentElement.style.setProperty('--primary-color', color);
	}

	changeColor(color: string): void {
		document.documentElement.style.setProperty('--secondary-color', color);
	}

}
