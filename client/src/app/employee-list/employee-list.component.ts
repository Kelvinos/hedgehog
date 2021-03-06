import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void{
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number): void{
    this.router.navigate(['update', id]);
  }
}