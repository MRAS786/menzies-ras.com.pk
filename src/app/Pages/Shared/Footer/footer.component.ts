import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/API/api.service';
import { GvarService } from 'src/app/Services/gvar.service';
import { ServicesResponse, serviceModelResponse, MenuResponse } from './Footer.Model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  MenuResponse: MenuResponse[];
  ServicesResponse: ServicesResponse[];
  serviceModelResponse: serviceModelResponse[];
  constructor(private API: ApiService, private GV: GvarService, private router: Router) {
    this.serviceModelResponse = [];
    this.ServicesResponse = [];
    this.MenuResponse = [];
  }

  ngOnInit(): void {
    // this.serviceModelResponse = this.GV.ServiceModelResponseFooterReplica;
    // this.ServicesResponse = this.GV.ServicesResponseReplica;
    // this.MenuResponse = this.GV.MenuResponseReplica;
    this.getStation();
    this.getServices();
    this.getSubMenus();
  }

  getStation() {
    this.serviceModelResponse = [];
    this.API.getdata('/Menzies/getStationList_Web').subscribe(
      data => {
        if (data != null) {
          this.serviceModelResponse = data.stationList;
        }
        else {
        }
      },
      error => {
        // Swal.fire({
        //   text: error.error.Message,
        //   icon: 'error',
        //   confirmButtonText: 'OK'
        // });
      });
  }

  getDetail(StationID: any) {

    this.GV.setDetail(StationID);
    //setTimeout(() => {  }, 3000);
    this.router.navigate(['/Location/' + StationID]);
  }

  getServices() {
    this.ServicesResponse = [];
    this.API.getdata('/Menzies/getServiceList_Web').subscribe(
      data => {
        if (data != null) {

          this.ServicesResponse = data.ServiceList;
        }
        else {
        }
      },
      error => {
        // Swal.fire({
        //   text: error.error.Message,
        //   icon: 'error',
        //   confirmButtonText: 'OK'
        // });
      });
  }

  getSubMenus() {
    this.MenuResponse = [];
    this.API.getdata('/Menzies/getSubServiceList_webb').subscribe(
      data => {
        if (data != null) {
      
          this.MenuResponse = data.ServiceList;
         
        }
        else {
        }
      },
      error => {
        // Swal.fire({
        //   text: error.error.Message,
        //   icon: 'error',
        //   confirmButtonText: 'OK'
        // });
      });
  }

  loadSubService(serviceID: any) {
    if (serviceID != null) {
      this.router.navigate(['/Services', serviceID]);
    }
  }
}
