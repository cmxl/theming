import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs';

@Injectable()
export class LogEffects {
	constructor(private actions$: Actions) { }

	logActions$ = createEffect(() =>
		this.actions$.pipe(
			tap(action => console.log(action))
		), { dispatch: false });
}