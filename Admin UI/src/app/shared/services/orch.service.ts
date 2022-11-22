import { Injectable } from '@angular/core';
import { VrnaflowService } from './vrnaflow.service';

export const COUNTRIES_KEY = 'countries';
export const ROLES_KEY = 'roles';
export const COUNTRY_KEY = 'country';
export const GENRES_KEY = 'genres';

@Injectable({
    providedIn: 'root'
})

export class OrchService {

    constructor(
        private vrnaflowService: VrnaflowService
    ) { }

    getAllConfiguration() {
        this.vrnaflowService.getConfigurations().subscribe((res: any) => {
            console.log(res);
            if (res.status.toLowerCase() === 'success' && res.statusCode == 200) {
                localStorage.setItem(COUNTRIES_KEY, JSON.stringify(res?.data?.country));
                localStorage.setItem(ROLES_KEY, JSON.stringify(res?.data?.roles));
                localStorage.setItem(GENRES_KEY, JSON.stringify(res?.data?.genre));
            } else {
                console.log('Error in getting master data');
            }
        }, (err: any) => {
            console.log('Network Error');
        })
    }

}