import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemePage } from './pages/theme/theme.page';

const routes: Routes = [{ path: '', component: ThemePage }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
