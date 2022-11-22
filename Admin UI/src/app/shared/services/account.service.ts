import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_KEY } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    vrnaFlowUrl: string = environment.vrnaFlowUrl;

    constructor(
        private http: HttpClient
    ) { }

    getAllRevenue() {
        const user = localStorage.getItem(USER_KEY);
        const baseUrl = environment.vrnaFlowUrl;
        const url = baseUrl + `revenue?movieId=0&partnerId=0`;
        return this.http.get(url);
    }
}
