import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employee!:EmployeeComponent;
  ngAfterContentInit(): void {
    this.employee.empName = 'yogesh'
  }

}
