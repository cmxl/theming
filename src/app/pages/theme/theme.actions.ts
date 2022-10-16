import { createAction, props } from '@ngrx/store';
import { Color } from '../../shared/components/color-picker/color-picker.store';

const changeColor = createAction('[Theme] changeColor', props<{ colors: { [color: string]: Color } }>());

export const themeActions = {
	changeColor: changeColor
};