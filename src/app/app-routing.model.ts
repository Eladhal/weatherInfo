import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/Components/home/home.component';
import {LogInComponent} from 'src/app/Components/log-in/log-in.component';
import {SignUpComponent} from 'src/app/Components/sign-up/sign-up.component';


const appRoutes: Routes = [
    { path: 'Home', component: HomeComponent },
    {path: 'Login', component: LogInComponent},
    {path: 'Sign-Up', component: SignUpComponent},
    { path: '', redirectTo: '/Home',pathMatch: 'full' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]
})
export class AppRoutingModule{

}

