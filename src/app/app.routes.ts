import { Routes } from '@angular/router';
import { AuthComponent } from './component/pages/auth/auth.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ApprovedDataComponent } from './component/pages/approved-data/approved-data.component';
import { DeclinedDataComponent } from './component/pages/declined-data/declined-data.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
    {
        path: "dashboard", 
        component: DashboardComponent

    },
    {
        path: "auth", 
        component: AuthComponent
    },
    {
        path: "", 
        component: HomeComponent
    },
    {
        path:"approved-data",
        component: ApprovedDataComponent
    },
    {
        path:"declined-data",
        component: DeclinedDataComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"register",
        component:RegisterComponent
    }
];
