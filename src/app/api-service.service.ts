import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './_models/client.model';
import { Customer } from './_models/customer.model';
import { Property } from './_models/property.model';
import { RealEstateAgent } from './_models/real_estate_agent.model';
import { Lease } from './_models/lease.model';
import { Invoice } from './_models/invoice.model';

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

  getClient(id: number) {
    return this.httpClient.get(this.API_URL + '/clients/' + id);
  }

  getAllClients(){
    return this.httpClient.get(this.API_URL + '/clients/all');
  }  

  storeClient(client: Client){
    return this.httpClient.post(this.API_URL + '/clients', client);
  }

  // Property types
  getPropertyTypes() {
    return this.httpClient.get(this.API_URL + '/property-types');
  }

  // Properties
  getProperties(){
    return this.httpClient.get(this.API_URL + '/properties');
  }

  getAllProperties(){
    return this.httpClient.get(this.API_URL + '/properties/all');
  }

  getProperty(id: number){
    return this.httpClient.get(this.API_URL + '/properties/' + id);
  }  

  getPropertyRooms(id: number){
    return this.httpClient.get(this.API_URL + '/properties/' + id + '/rooms');
  }   

  storeProperty(property: Property){
    return this.httpClient.post(this.API_URL + '/properties', property);
  }

  // Customer Types
  getCustomerTypes(){
    return this.httpClient.get(this.API_URL + '/customer-types');
  }

  // Customers
  getCustomers() {
    return this.httpClient.get(this.API_URL + '/customers');
  }

  getAllCustomers() {
    return this.httpClient.get(this.API_URL + '/customers/all');
  }  

  getCustomer(id: number){
    return this.httpClient.get(this.API_URL + '/customers/' + id);
  }

  storeCustomer(customer: Customer) {
    return this.httpClient.post(this.API_URL + '/customers', customer);
  }

  // Customer Payments
  getCustomerPayments(){
    return this.httpClient.get(this.API_URL + '/customer-payments');
  }

  // Real Estate Agents
  getRealEstateAgents(){
    return this.httpClient.get(this.API_URL + '/real-estate-agents');
  }

  storeRealEstateAgent(realEstateAgent: RealEstateAgent){
    return this.httpClient.post(this.API_URL + '/real-estate-agents', realEstateAgent);
  }

  // Leases
  getLeases(){
    return this.httpClient.get(this.API_URL + '/leases');
  }

  getLease(id: number){
    return this.httpClient.get(this.API_URL + '/leases/' + id);
  }  

  storeLease(lease: Lease){
    return this.httpClient.post(this.API_URL + '/leases', lease);
  }

  // Generate control numbers
  generateControlNumber(payload: any){
    return this.httpClient.post(this.API_URL + '/control-numbers', payload);
  }

  // Invoices
  getInvoices() {
    return this.httpClient.get(this.API_URL + '/invoices');
  }

  getInvoice(id: number) {
    return this.httpClient.get(this.API_URL + '/invoices/' + id);
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
