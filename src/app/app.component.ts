import { Component, OnInit } from '@angular/core';
import { Color, Rgb } from './shared/components/color-picker/color-picker.store';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	primary: Partial<Color> = { hex: '#000000' };
	secondary: Partial<Color> = { hex: '#000000' };
	accent: Partial<Color> = { hex: '#000000' };
	neutral: Partial<Color> = { hex: '#000000' };
	base: Partial<Color> = { hex: '#000000' };
	info: Partial<Color> = { hex: '#000000' };
	success: Partial<Color> = { hex: '#000000' };
	warning: Partial<Color> = { hex: '#000000' };
	error: Partial<Color> = { hex: '#000000' };
	/*
	
		--primary-color: #6419E6;
		--secondary-color: #D926A9;
		--accent-color: #1FB2A6;
		--neutral-color: #191D24;
		--base-color-100: #2A303C;
		--info-color: #3ABFF8;
		--success-color: #36D399;
		--warning-color: #FBBD23;
		--error-color: #F87272;
	*/



	ngOnInit(): void {
		this.primary = { rgb: this.getRgbColor('primary') };
		this.secondary = { rgb: this.getRgbColor('secondary') };
		this.accent = { rgb: this.getRgbColor('accent') };
		this.neutral = { rgb: this.getRgbColor('neutral') };
		this.base = { rgb: this.getRgbColor('base') };
		this.info = { rgb: this.getRgbColor('info') };
		this.success = { rgb: this.getRgbColor('success') };
		this.warning = { rgb: this.getRgbColor('warning') };
		this.error = { rgb: this.getRgbColor('error') };

	}

	changeColor(color: Color, colorName: string): void {
		document.documentElement.style.setProperty('--' + colorName + '-color', `${color.rgb.red}, ${color.rgb.green}, ${color.rgb.blue}`);
	}

	getRgbColor(name: string): Rgb {
		const color = getComputedStyle(document.documentElement).getPropertyValue(`--${name}-color`).trim().split(',');
		const rgb = { red: +color[0], green: +color[1], blue: +color[2] };
		return rgb;
	}

}
