import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../../core/services/department.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  selectedRole: string = '';
  router =  inject(Router);
  loggedUserData: any;
  constructor(private deptService: DepartmentService) {
    // const loggedData = localStorage.getItem("loginUser");
    
    // if(loggedData != null) {
    //   this.loggedUserData  = JSON.parse(loggedData);
    // }
  }
  logoff() {
    // localStorage.removeItem('loginUser');
    // this.router.navigateByUrl('login')
  }
  onRoleChnage(role: string) {
    debugger;
    this.deptService.onRoleChange$.next(role)
    this.deptService.role$.next(role)
  }
}
