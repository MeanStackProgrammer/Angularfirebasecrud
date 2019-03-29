import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private _toast: ToastrService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
    } else { this.employeeService.updateEmployee(employeeForm.value);
    }
      this.resetForm();
      this._toast.success('Submitted successfully', 'Employee register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) { employeeForm.reset();
      this.employeeService.selectedEmployee = {
      $key : null,
      name : '',
      position : '',
      office : '',
      salary : 0 }
    }
  }
}
