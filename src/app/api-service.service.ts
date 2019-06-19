import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './_models/client.model';
import { Customer } from './_models/customer.model';
import { Property } from './_models/property.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // local
  API_URL = 'http://localhost:8000/api';
  // testing
  // API_URL = 'https://hidden-island-92023.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  // Dashboard
  getDashboardData(){
    return this.httpClient.get(this.API_URL + '/dashboard');
  }

  // Users
  getUsers(){
    return this.httpClient.get(this.API_URL + '/users');
  }

  // Client Types
  getClientTypes(){
    return this.httpClient.get(this.API_URL + '/client-types');
  }

  // Clients
  getClients(){
    return this.httpClient.get(this.API_URL + '/clients');
  }

  getAllClients(){
    return this.httpClient.get(this.API_URL + '/clients/all');
  }  

  storeClient(client: Client){
    return this.httpClient.post(this.API_URL + '/clients', client);
  }

  // Properties
  getPropertyTypes() {
    return this.httpClient.get(this.API_URL + '/property-types');
  }

  getProperties(){
    return this.httpClient.get(this.API_URL + '/properties');
  }

  storeProperty(property: Property){
    return this.httpClient.post(this.API_URL + '/properties', property);
  }

  // Customers
  getCustomerTypes(){
    return this.httpClient.get(this.API_URL + '/customer-types');
  }

  getCustomers() {
    return this.httpClient.get(this.API_URL + '/customers');
  }

  getCustomer(id: number){
    return this.httpClient.get(this.API_URL + '/customers/' + id);
  }

  storeCustomer(customer: Customer) {
    return this.httpClient.post(this.API_URL + '/customers', customer);
  }

  // Regions
  getRegions(){
    return this.httpClient.get(this.API_URL + '/regions');
  }

  getRegionDistricts(id: number){
    return this.httpClient.get(this.API_URL + '/regions/'+ id + '/districts');
  }
  
  // Districts
  getDistricts(){
    return this.httpClient.get(this.API_URL + '/districts');
  }

  getDistrictWards(id: number){
    return this.httpClient.get(this.API_URL + '/districts/'+ id + '/wards');
  }

  // Wards
  getWards(){
    return this.httpClient.get(this.API_URL + '/wards');
  }

  getWardVillages(id: number) {
    return this.httpClient.get(this.API_URL + '/wards/' + id + '/villages');
  }

  // Villages
  getVillages(){
    return this.httpClient.get(this.API_URL + '/villages');
  }
}
