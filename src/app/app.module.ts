import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeEffects } from './pages/theme/theme.effects';
import { ThemePage } from './pages/theme/theme.page';
import { themeReducers } from './pages/theme/theme.reducers';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, ThemePage],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		StoreModule.forRoot({ theme: themeReducers }, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		StoreRouterConnectingModule.forRoot(),
		EffectsModule.forRoot([ThemeEffects])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
