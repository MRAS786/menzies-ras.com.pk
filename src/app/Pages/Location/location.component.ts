import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/Services/API/api.service';
import { GvarService } from 'src/app/Services/gvar.service';
import { ActivatedRoute } from "@angular/router";
import { contactStationStaffModelResponse, RequestSubStationSerive, ResponseModel, stationcontactModelResponse, stationServiceModelResponse, statsRequest, SubStationModelResponse } from './Location.Model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  designationNotchange:string="";
  designation: string = "";
  address: string = "";
  uniqueName:string="";
  uniqueDesignation:string="";
  tellno: string = "";
  name: string = "";
  workingHour:string="";
  workingDays:string="";
  location: string = "";
  contactId: any; private sub: any;
  private id: number = 0;
  public isCollapsed = -1;
  public index = 1;
  ResponseModel: ResponseModel;
  stationname: string = "";
  stationdiscription: string = "";
  stationheadpic: string = "";
  subServiceResponse:any;
  serviceModelResponse: any;
  serviceStationListResponse:any;
  subServiceStationResponse:any;
  subStationDesArrOne: RequestSubStationSerive[];
  subStationDesArrTwo: RequestSubStationSerive[];
  statsRequest:statsRequest[];
  stationServiceModelResponse: stationServiceModelResponse[];
  SubStationModelResponse: SubStationModelResponse[];
  contactStationStaffModelResponse: contactStationStaffModelResponse[];
  stationcontactModelResponse: stationcontactModelResponse[];
  constructor(private route: ActivatedRoute, private router: Router, private API: ApiService, private GV: GvarService) {
    this.stationServiceModelResponse = [];
    this.SubStationModelResponse = [];
    this.contactStationStaffModelResponse = [];
    this.stationcontactModelResponse = [];
    this.subStationDesArrOne = [];
    this.subStationDesArrTwo = [];
    this.statsRequest=[];
    this.serviceStationListResponse=[];
    this.subServiceStationResponse=[];
    this.ResponseModel = new ResponseModel();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != null && this.id > 0) {
        this.getStationContactUs(this.id);
      }
    });
  }

  ngOnInit(): void {
    this.getContacts();
    this.getStation();
    if (this.GV.STATIONid > 0) {
      this.getDetail(this.GV.STATIONid);
      this.getSubServices(this.GV.STATIONid);
      this.getSubServicesName(this.GV.STATIONid);
    }
    this.GV.EntryAdded.subscribe((data) => {
      //call my function
      this.getDetail(data);
      this.getSubServicesName(data);
      this.getSubServices(data);
    })
  }


  getDetail(StationId: any) {

    window.scroll(0, 0);
    this.API.getdata('/Menzies/getStationService?stationID=' + StationId).subscribe(
      data => {
        if (data != null) {
          this.ResponseModel.RequestStationContact = data.RequestStationContact;
          this.ResponseModel.RequestStationSerive = data.RequestStationSerive;
          this.ResponseModel.RequestSubStationSerive = data.RequestSubStationSerive;
          this.ResponseModel.statsRequest=data.getstats;

          // this.ResponseModel.RequestSubStationSerive.forEach((x: any) => {
          //   var abc = <HTMLElement>x.subStationServiceDescription.innerHTML as HTMLInputElement;
          // })

          //var half = this.ResponseModel.RequestSubStationSerive.length / 2;
          // check kro agar array ki length 0 sy greater hai aur 1 ky equal hai
          // if (this.ResponseModel.RequestSubStationSerive.length == 1) {
          //   this.subStationDesArrOne = this.ResponseModel.RequestSubStationSerive;
          //   this.subStationDesArrTwo = [];
          // }
          //even ky ley
          // else if (this.ResponseModel.RequestSubStationSerive.length > 1
          //   && this.ResponseModel.RequestSubStationSerive.length % 2 == 0) {

          //   for (let i = 0; i < this.ResponseModel.RequestSubStationSerive.length; i++) {
          //     if (i < half) {
          //       this.subStationDesArrOne.push(this.ResponseModel.RequestSubStationSerive[i]);
          //     }
          //     else {
          //       this.subStationDesArrTwo.push(this.ResponseModel.RequestSubStationSerive[i]);
          //     }
          //   }
          // }
          //odd ky ley
          // else if (this.ResponseModel.RequestSubStationSerive.length > 1
          //   && this.ResponseModel.RequestSubStationSerive.length % 2 == 1) {
          //   //round off
          //   half = Math.ceil(half);

          //   for (let i = 0; i < this.ResponseModel.RequestSubStationSerive.length; i++) {
          //     if (i < half) {
          //       this.subStationDesArrOne.push(this.ResponseModel.RequestSubStationSerive[i]);
          //     }
          //     else {
          //       this.subStationDesArrTwo.push(this.ResponseModel.RequestSubStationSerive[i]);
          //     }
          //   }
          // }


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
  getContacts() {
    this.serviceModelResponse = [];
    this.API.getdata('/Menzies/getStationContactStaff').subscribe(
      data => {
        if (data != null) {
          this.contactStationStaffModelResponse = data.getcontactstationstaff;
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

  getStationContactUs(stationID: any) {

    this.stationcontactModelResponse = [];
    this.API.getdata('/Menzies/getStationContactStaffbyStation?stationId=' + stationID).subscribe(
      data => {
        if (data != null) {
          this.stationcontactModelResponse = data.getcontactstationnwise;
          if (this.stationcontactModelResponse != null) {
            this.contactId = this.stationcontactModelResponse[0].contactId;
            this.updateDetail();
            var data: any = this.stationcontactModelResponse.find(c => c.contactId == this.contactId);
            if (data != null) {
              this.uniqueName = data.contactName;
              this.uniqueDesignation= data.contactDesignation;
            }
          }
        }
        else {
        }
      },
      error => {
      });
  }
  updateDetail() {
    var data = this.stationcontactModelResponse.find(c => c.contactId == this.contactId);
    if (data != null) {
      this.designation = data.contactDesignation;
      this.name = data.contactName;
      this.address = data.contactAddress;
      this.location = data.contactLocation;
      this.tellno = data.contactPhone;
      this.workingHour=data.workingHour;
      this.workingDays=data.workingDays

    }

  }
  getSubServiceStations() {
    this.subServiceStationResponse = [];
    this.API.getdata('/Menzies/getSubServiceStationList').subscribe(
      data => {
        if (data != null) {
          this.subServiceStationResponse = data.getservicestation;
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
  getSubServices(stationID: any) {
    this.serviceStationListResponse = [];
    this.API.getdata('/Menzies/getServiceStationList_web?stationId='+stationID).subscribe(
      data => {
        if (data != null) {
          this.serviceStationListResponse = data.getserviceStationList;
          // let uniNo = 1;
          // this.serviceStationListResponse.forEach((c: any) => {
          //   c.uniqueNo = uniNo;
          //   uniNo++;
          // })
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
  getSubServicesName(stationID: any) {
    this.subServiceResponse = [];
    this.API.getdata('/Menzies/getSubServiceStationName_web?stationId='+stationID).subscribe(
      data => {
        if (data != null) {
          this.subServiceResponse = data.getservicestation;


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

}
