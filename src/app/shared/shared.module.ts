import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InvisibleIconComponent } from './components/invisible-icon/invisible-icon.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { VisibleIconComponent } from './components/visible-icon/visible-icon.component';

@NgModule({
	declarations: [
		InvisibleIconComponent,
		VisibleIconComponent,
		PasswordInputComponent,
		ColorPickerComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		InvisibleIconComponent,
		VisibleIconComponent,
		PasswordInputComponent,
		ColorPickerComponent,
		FormsModule
	]
})
export class SharedModule { }