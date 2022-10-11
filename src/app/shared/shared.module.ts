import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvisibleIconComponent } from './components/invisible-icon/invisible-icon.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { VisibleIconComponent } from './components/visible-icon/visible-icon.component';

@NgModule({
	declarations: [
		InvisibleIconComponent,
		VisibleIconComponent,
		PasswordInputComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		InvisibleIconComponent,
		VisibleIconComponent,
		PasswordInputComponent,
		FormsModule
	]
})
export class SharedModule { }