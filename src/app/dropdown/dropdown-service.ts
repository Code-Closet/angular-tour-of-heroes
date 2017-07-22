import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DropdownModel } from './dropdown-model';

@Injectable()
export class DropdownService {
    private heroesUrl = 'api/dropdownData';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http : Http) {}

    getDropdownData() : Promise<DropdownModel[]> {
        return this.http.get(this.heroesUrl).toPromise()
                    .then(response => response.json().data as DropdownModel[])
                    .catch(this.handleError);
    }

    handleError(error : any) : Promise<any> {
		  console.error('An error occurred', error); // for demo purposes only
  		  return Promise.reject(error.message || error);
	}
}