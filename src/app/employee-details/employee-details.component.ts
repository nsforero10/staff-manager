import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

	public employeeId: number;
	public employee;
	constructor(private route: ActivatedRoute, private _service: EmployeesService) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe((params: ParamMap) =>{
			this.employeeId = parseInt(params.get('id'))
		});

		this._service.getEmployeeByID(this.employeeId)
		.subscribe();
	}

}
