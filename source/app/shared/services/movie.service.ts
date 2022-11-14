import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = environment.contentUrl + 'movie';

  constructor(
    private http: HttpClient
  ) { }

  getMovieDetail(id: any) {
    const url = this.baseUrl + `/${id}`;
    return this.http.get(url);
  }

  getAllPendingMovies() {
    const url = this.baseUrl + `/pending`;
    return this.http.get(url);
  }

  getAllActiveMovies() {
    const url = this.baseUrl + `/activemovies`;
    return this.http.get(url);
  }

  getAllRejectedMovies() {
    const url = this.baseUrl + `/rejectedmovies`;
    return this.http.get(url);
  }

  approveMovie(movieId: any) {
    const url='http://ec2-3-21-205-116.us-east-2.compute.amazonaws.com:8089/orch-service' +  environment.vrnaFlowUrl + 'approvemovie';
    /*const url = environment.vrnaFlowUrl + `approvemovie`;*/
    return this.http.post(url, movieId);
  }

  rejectMovie(movieId: any) {
    const url='http://ec2-3-21-205-116.us-east-2.compute.amazonaws.com:8089/orch-service'+ environment.vrnaFlowUrl + 'rejectmovie';
    return this.http.post(url, movieId);
  }

  create(data: any) {
    const url='http://ec2-3-21-205-116.us-east-2.compute.amazonaws.com:8089/orch-service' +  environment.vrnaFlowUrl + 'addmovie';
    return this.http.post(url, data);
  }

  update(id: any, data: any) {
    return this.http.put(`content-service/${id}`, data);
  }
}
