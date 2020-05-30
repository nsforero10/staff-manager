import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-staff',
	templateUrl: './staff.component.html',
	styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
	public employees = [];
	public closeResult = '';
	newEmployeeForm = new FormGroup({
		name: new FormControl(''),
		salary: new FormControl(''),
		age: new FormControl(''),
	      });

	constructor(
		private _service: EmployeesService,
		private _router: Router,
		private _modalService: NgbModal) { }

	ngOnInit(): void {
		this._service.getAllEmployees()
			.subscribe(response => {
				this.employees = response['data']
			})
	}
	onSelect(employee: any) {
		this._router.navigate(['/employee/', employee.id]);
	}
	deleteEmployee(employee: any) {

		this._service.deleteEmployee(employee.id)
		.subscribe(response => {
			alert(`Status: ${response['status']}\nMessage: ${response['message']}`)
		});
		this.ngOnInit;
	}
	openModal(content: any) {
		this._modalService.open(content).result
		.then((result) => {
			console.log(result);
			this.closeResult = `${result}`;
		}, () => {
			this.newEmployeeForm.setValue({name: '', salary:'', age :''})
		})
	}
	createEmployee(){
		this._service.createEmployee(this.newEmployeeForm.value).subscribe(response => {
			alert(`Status: ${response['status']}\nMessage: ${JSON.stringify(response['data'])} `)
			this._modalService
		})
		this.ngOnInit;
	}
}

