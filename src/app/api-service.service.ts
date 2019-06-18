import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './_models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_URL = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  // Client Types
  getClientTypes(){
    return this.httpClient.get(this.API_URL + '/client-types');
  }

  // Clients
  getClients(){
    return this.httpClient.get(this.API_URL + '/clients');
  }

  storeClient(client: Client){
    return this.httpClient.post(this.API_URL + '/clients', client);
  }

  // Properties
  getProperties(){
    return this.httpClient.get(this.API_URL + '/properties');
  }
}
