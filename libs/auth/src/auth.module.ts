import { NgrxFormsModule } from '@angular-ngrx-nx/ngrx-forms/src/ngrx-forms.module';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth.effects';
import { authInitialState } from './+state/auth.init';
import { authReducer } from './+state/auth.reducer';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreModule } from '@angular-ngrx-nx/core';

const authRouting: ModuleWithProviders = RouterModule.forChild([
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	}
]);

@NgModule({
	imports: [
		CoreModule,
		CommonModule,
		NgrxFormsModule,
		authRouting,
		StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: [AuthEffects, AuthGuardService, AuthService],
	declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
