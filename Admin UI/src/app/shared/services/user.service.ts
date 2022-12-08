import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = '/auth-service/user/';

  constructor(
    private http: HttpClient
  ) { }

  getUserDetail(id: any) {
    const url = this.baseUrl + `${id}`;
    return this.http.get(url);
  }

  getAllPendingUsers() {
    const url = this.baseUrl + `pending`;
    

    return this.http.get(url);
  }

  getAllActiveUsers() {
    const url = this.baseUrl + `activeusers`;
    return this.http.get(url);
  }

  getAllRejectedUsers() {
    /*const url = this.baseUrl + `rejectedusers`;*/
    const url = this.baseUrl + `rejectedusers`
    return this.http.get(url);
  }
 
  approveUser(data: any) {
    const url= environment.baseUrl+environment.vrnaFlowUrl + 'approveuser';
    /*const url = environment.vrnaFlowUrl + `approveuser`;*/
    return this.http.post(url, data);
  }

  rejectUser(data: any) {
    const url =environment.baseUrl+ environment.vrnaFlowUrl + `rejectuser`;
    return this.http.post(url, data);
  }

  /* New User registration */
  userRegistration(data: any) {
   const url=environment.baseUrl+ environment.vrnaFlowUrl + 'signup';
   // const url = 'http://ec2-3-21-205-116.us-east-2.compute.amazonaws.com:8089/orch-service/vrnaflow/'+ 'adduser';
    /*const url = this.baseUrl + 'signup';*/
    return this.http.post(url, data);
  }
}
