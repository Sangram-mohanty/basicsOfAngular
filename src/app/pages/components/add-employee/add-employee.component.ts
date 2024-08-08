import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { DisableCopyDirective } from '../../../shared/Directives/disable-copy.directive';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [DisableCopyDirective],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent  implements OnInit{
  empService = inject(EmployeeService);
  name: string = 'Html';
  userList = signal<any[]>([])
  constructor(private cdRef:ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.empService.getUsers().subscribe((res:any)=>{
      this.userList.set(res);
      this.name = "JAVA"; 
    })
  }
 

}
