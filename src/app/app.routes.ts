import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { AddEmployeeComponent } from './pages/components/add-employee/add-employee.component';
import { DataBindingComponent } from './pages/components/data-binding/data-binding.component';
import { EmployeeListComponent } from './pages/components/employee-list/employee-list.component';
import { StructuralDirectivesComponent } from './pages/components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './pages/components/attribute-directives/attribute-directives.component';
import { LoginComponent } from './pages/components/login/login.component';
import { LayoutComponent } from './pages/components/layout/layout.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'add-emp',
                component: AddEmployeeComponent
            }
        ]

    }

];
