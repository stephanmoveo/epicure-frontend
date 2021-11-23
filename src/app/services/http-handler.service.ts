import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class HttpHandlerService {

	headerSubscriber: any;

	private baseUrl = 'http://localhost:3000/api/';
	public headers = new HttpHeaders();

	constructor(private http: HttpClient, public httpService: HttpService) {
		this.headers = new HttpHeaders().set('Content-Type', 'application/json');

		const idToken = localStorage.getItem('token');
		if (idToken) {
			this.httpService.updateHeader('token', idToken);
		}
		this.headerSubscriber = this.httpService.headers.subscribe((updatedValue : any)=> {
			if (updatedValue) {
				this.headers = this.headers.set(updatedValue.key, updatedValue.value);
			}
		});
	}

	protected get(url: string, params: {} | undefined, headers?: HttpHeaders): Observable<any> {
		return this.http.get(this.baseUrl + url, { params, headers: headers || this.headers });
	}

	protected delete(url: string, params: {} | undefined): Observable<any> {
		return this.http.delete(this.baseUrl + url, { params, headers: this.headers });
	}

	protected put(url: string, body: {}): Observable<any> {
		return this.http.put(this.baseUrl + url, body, { headers: this.headers });
	}

	protected post(url: string, body: {}): Observable<any> {
		return this.http.post(this.baseUrl + url, body, { headers: this.headers });
	}


}