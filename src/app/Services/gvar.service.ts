import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RolesRequestModel } from './API/rolesModel';
import { CurrentUserViewModel } from './API/userModel';

@Injectable({
  providedIn: 'root'
})
export class GvarService {
  ServiceModelResponseFooterReplica: any;
  ServicesResponseReplica: any;
  MenuResponseReplica: any;

  EntryAdded : Subject<any> = new Subject<any>();
  STATIONid: number = 0;
  GoodsCallFrom: string = "";
  private Roles: RolesRequestModel[];
  G_IsRunning: boolean = false;
  companyID: number = 0;
  OutletID: number = 0;
  OutletAddress: string = "";
  Currency: string = "";
  companyName: string = "";
  OutletName: string = "";
  locationID: number = 0;
  userName: any;
  UserId: any;
  currentUser: CurrentUserViewModel;
  serverURL: string = environment.serverURL;
  serverURLLogin: string = environment.serverURLLogin;
  constructor() {
    this.currentUser = new CurrentUserViewModel();
    this.Roles = [];
    this.userName = (localStorage.getItem('userName'));
    this.UserId = (localStorage.getItem('UserId'));
  }

  roleMatch(allowedRoles: any): boolean {
    var temp = (localStorage.getItem('userRoles'));
    if (temp == "undefined") {
      return false
    }
    this.Roles = JSON.parse(localStorage.getItem('userRoles') || '{}');

    for (var i = 0; i < this.Roles.length; i++) {
      var checkRole = this.Roles[i].RoleId
      if (allowedRoles == this.Roles[i].RoleId) {
        return true
      }
    }
    return false
  }
  get canAddEditOwner() {
    return this.roleMatch(1);
  }
  get canGetOwner() {
    return this.roleMatch(2);
  }
  get canAddEditCompany() {
    return this.roleMatch(3);
  }
  get canGetCompany() {
    return this.roleMatch(4);
  }
  get canAddEditOutlet() {
    return this.roleMatch(5);
  }
  get canGetOutlets() {
    return this.roleMatch(6);
  }

  setDetail(stationid: any){

    this.STATIONid = stationid;
    this.EntryAdded.next(stationid);
  }
}

