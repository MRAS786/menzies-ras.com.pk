import { Component, Injectable, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/Services/API/api.service';
import { subServiceModelResponse } from './subServiceModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Safe } from "../../Pipes/safe-html.pipe"
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrls: ['./sub-services.component.css']
})

export class SubServicesComponent implements OnInit {
  subServiceModelResponse: subServiceModelResponse[];
  private sub: any;
  private id: number = 0;
  servicename: string = "";
  serviceDescription: string = "";
  showHideGHServiceSlider: boolean = false;
  showHideCargoHServiceSlider: boolean = false;
  showHideTicktServiceSlider: boolean = false;
  showHideCharterServiceSlider: boolean = false;
  constructor(private route: ActivatedRoute, private API: ApiService) {
    this.subServiceModelResponse = [];
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != null && this.id > 0) {
        this.getSubService(this.id);
      }
    });
    window.scroll(0, 0);
    // if (this.id == 11) {
    //   this.showHideGHServiceSlider = true;
    //   this.showHideCargoHServiceSlider = false;
    //   this.showHideTicktServiceSlider = false;
    //   this.showHideCharterServiceSlider = false;
    // }
    // else if (this.id == 12) {
    //   this.showHideCargoHServiceSlider = true;
    //   this.showHideGHServiceSlider = false;
    //   this.showHideTicktServiceSlider = false;
    //   this.showHideCharterServiceSlider = false;
    // }
    // else if (this.id == 13) {
    //   this.showHideTicktServiceSlider = true;
    //   this.showHideGHServiceSlider = false;
    //   this.showHideCargoHServiceSlider = false;
    //   this.showHideCharterServiceSlider = false;
    // }
    // else if (this.id == 15) {
    //   this.showHideCharterServiceSlider = true;
    //   this.showHideTicktServiceSlider = false;
    //   this.showHideGHServiceSlider = false;
    //   this.showHideCargoHServiceSlider = false;
    // }
  }

  getSubService(serviceID: number) {
    window.scroll(0, 0);
    this.subServiceModelResponse = [];
    this.API.getdata('/Menzies/getSubServiceList_Web?serviceID=' + serviceID).subscribe(
      data => {
        if (data != null) {
          this.subServiceModelResponse = data.ServiceList;
          var Servicename = this.subServiceModelResponse.find(c => c.serviceName);
          if (Servicename != null) {
            this.servicename = Servicename.serviceName;
            this.serviceDescription = Servicename.serviceDescription;
          }
          let uniNo = 1;
          this.subServiceModelResponse.forEach((c: any) => {
            c.uniqueNo = uniNo;
            uniNo++;
          })

        }
        else {
        }
      },
    );
  }

}
