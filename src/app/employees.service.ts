import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})

export class EmployeesService {

	constructor(private _http: HttpClient) { }

	getAllEmployees(): Observable<IEmployee[]> {
		return this._http.get<IEmployee[]>(`${environment.employeeURL}/employees`);
	}
	getEmployeeByID(id: number): Observable<IEmployee> {
		return this._http.get<IEmployee>(`${environment.employeeURL}/employee/${id}`).pipe(catchError(err => {
			alert(`Error: ${err.error.message}`)
			return throwError(err);
		}));
	}
	deleteEmployee(id: number){
		return this._http.delete(`${environment.employeeURL}/delete/${id}`);
	}
	createEmployee(response: object){
		return this._http.post(`${environment.employeeURL}/create`, response).pipe(catchError(err => {
			alert(`Error: ${err.error.message}`)
			return throwError(err);
		}));
	}
}
export interface IEmployee {
	_id: number,
	_name: String,
	_salary: number,
	_age: number
}