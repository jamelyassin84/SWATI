import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	constructor(
		public http: HttpClient,
		@Inject('url') @Optional() public url: String = '',
		@Inject('params') @Optional() public params: String
	) {}

	headers() {
		return {
			headers: new HttpHeaders({
				'Access-Control-Allow-Origin': 'http://localhost:1229',
				Authorization: 'Bearer 1',
				'Content-Type': [],
			}),
		}
	}

	paginate(url: string) {
		return this.http.get<any>(url, this.headers())
	}

	index() {
		const url = `${environment.api}${this.url}${
			this.params === '' ? '' : '?' + this.params
		}`
		return this.http.get<any>(url, this.headers())
	}

	show(id: Number) {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.get<any>(url, this.headers())
	}

	create(data: Object) {
		const url = `${environment.api}${this.url}`
		return this.http.post<any>(url, data, this.headers())
	}

	update(id: Number, data: Object) {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.patch<any>(url, data, this.headers())
	}

	destroy(id: Number) {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.delete<any>(url, this.headers())
	}
}
