import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  getStreams(offset, limit) {
    const headers = new HttpHeaders({ 'Client-ID': 'c0bpyzcfuzsfu5ukbdwswz8sblhu9v' });
    return this.http.get('https://api.twitch.tv/kraken/streams/?language=en&game=Red Dead Redemption 2&limit='
    + limit + '&offset=' + offset, { headers });
  }

  getStream(displayName) {
    const headers = new HttpHeaders({ 'Client-ID': 'c0bpyzcfuzsfu5ukbdwswz8sblhu9v' });
    return this.http.get('https://api.twitch.tv/kraken/streams/' + displayName, { headers });
  }

}
