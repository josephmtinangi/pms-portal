import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './_models/client.model';
import { Customer } from './_models/customer.model';
import { Property } from './_models/property.model';
import { RealEstateAgent } from './_models/real_estate_agent.model';
import { Lease } from './_models/lease.model';
import { Invoice } from './_models/invoice.model';
import { Observable } from 'rxjs';
import { Room } from './_models/room.models';
import { ClientType } from './_models/client_type.model';
import { PropertyType } from './_models/property_type.model';
import { CustomerType } from './_models/customer_type.model';
import { Region } from './_models/region.model';
import { District } from './_models/district.model';
import { Ward } from './_models/ward.model';
import { Village } from './_models/village.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // local
  WEB_URL = 'http://localhost:8001';
  API_URL = 'http://localhost:8001/api';
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

  storeClientType(clientType: ClientType) {
    return this.httpClient.post(this.API_URL + '/client-types', clientType);
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

  updateClient(id: number, client: Client) {
    return this.httpClient.patch(this.API_URL + '/clients/' + id, client)
  }

  destroyClient(id: number) {
    return this.httpClient.delete(this.API_URL + '/clients');
  }

  // Property types
  getPropertyTypes() {
    return this.httpClient.get(this.API_URL + '/property-types');
  }

  storePropertyType(propertyType: PropertyType){
    return this.httpClient.post(this.API_URL + '/property-types', propertyType);
  }

  // Payment modes
  getPaymentModes() {
    return this.httpClient.get(this.API_URL + '/payment-modes');
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

  updateProperty(id: number, property: Property) {
    return this.httpClient.patch(this.API_URL + '/properties/' + id, property);
  }

  destoryProperty(id: number){
    return this.httpClient.delete(this.API_URL + '/properties/' + id);
  }

  // Rooms
  getRooms() {
    return this.httpClient.get(this.API_URL + '/rooms');
  }

  getRoom(id: number) {
    return this.httpClient.get(this.API_URL + '/rooms/' + id);
  }

  storeRoom(room: Room) {
    return this.httpClient.post(this.API_URL + '/rooms', room);
  }

  updateRoom(id: number, room: Room) {
    return this.httpClient.patch(this.API_URL + '/rooms/' + id, room);
  }

  destoryRoom(id: number){
    return this.httpClient.delete(this.API_URL + '/rooms/' + id);
  }

  // Customer Types
  getCustomerTypes(){
    return this.httpClient.get(this.API_URL + '/customer-types');
  }

  storeCustomerType(customerType: CustomerType){
    return this.httpClient.post(this.API_URL + '/customer-types', customerType);
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

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.patch(this.API_URL + '/customers/' + id + '', customer);
  }

  destroyCustomer(id: number) {
    return this.httpClient.delete(this.API_URL + '/customers/' + id);
  }

  // Customer Payments
  getCustomerPayments(){
    return this.httpClient.get(this.API_URL + '/customer-payments');
  }

  // Client Payments
  getClientPayments(){
    return this.httpClient.get(this.API_URL + '/client-payments');
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

  storeRegion(region: Region){
    return this.httpClient.post(this.API_URL + '/regions', region);
  }

  getRegionDistricts(id: number){
    return this.httpClient.get(this.API_URL + '/regions/'+ id + '/districts');
  }
  
  // Districts
  getDistricts(){
    return this.httpClient.get(this.API_URL + '/districts');
  }

  storeDistrict(district: District) {
    return this.httpClient.post(this.API_URL + '/districts', district);
  }

  getDistrictWards(id: number){
    return this.httpClient.get(this.API_URL + '/districts/'+ id + '/wards');
  }

  // Wards
  getWards(){
    return this.httpClient.get(this.API_URL + '/wards');
  }

  storeWard(ward: Ward) {
    return this.httpClient.post(this.API_URL + '/wards', ward);
  }

  getWardVillages(id: number) {
    return this.httpClient.get(this.API_URL + '/wards/' + id + '/villages');
  }

  // Villages
  getVillages(){
    return this.httpClient.get(this.API_URL + '/villages');
  }

  storeVillage(village: Village) {
    return this.httpClient.post(this.API_URL + '/villages', village);
  }

  // Download Invoice
  downloadInvoice(id: number): Observable<Blob> {
    // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
    return this.httpClient.get(this.WEB_URL + '/invoice/' + id, { responseType: 'blob' });
  }  
}
