import { Injectable, Inject, InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators'
@Injectable({
	providedIn: 'root'
})

export class EmployeesService {

	constructor(private _http: HttpClient) { }

	getAllEmployees(): Observable<IEmployee[]> {
		return this._http.get<IEmployee[]>(`${environment.employeeURL}/employees`);
	}
	getEmployeeByID(id: number): Observable<IEmployee> {
		return this._http.get<IEmployee>(`${environment.employeeURL}/employee/${id}`);
	}
	deleteEmployee(id: number){
		return this._http.delete(`${environment.employeeURL}/delete/${id}`)	
	}
}
export interface IEmployee {
	_id: number,
	_name: String,
	_salary: number,
	_age: number
}