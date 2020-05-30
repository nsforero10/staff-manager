import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  public employees = []	;
  constructor(private _service: EmployeesService, private router:Router) {
   }

  ngOnInit(): void {
	this._service.getAllEmployees()
	.subscribe(response => {
		this.employees = response['data']
	})
  }
  onSelect(employee: any){
	this.router.navigate(['/employee/', employee.id]);
  }
  deleteEmployee(employee: any){
	
	this._service.deleteEmployee(employee.id)
	.subscribe(response => {
		console.log(response);
		alert(`Status: ${response['status']}\nMessage: ${response['message']}`)
	});
  }
}

