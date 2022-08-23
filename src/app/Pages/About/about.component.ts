import * as Aos from 'aos';
import { AosOptions } from 'aos';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/API/api.service';
import { categoryModelResponse, GeneralInfoModelResponse, GetSubgaterotyModelResponse, } from '../Shared/Topbar/Topbar.Model';
import { serviceModelResponse } from './about.model';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  GeneralInfoModelResponse:GeneralInfoModelResponse[];
  serviceModelResponse: serviceModelResponse[];
  aboutDetail:string="";

  constructor(public API: ApiService, public router:Router) {
    this.GeneralInfoModelResponse=[];
    this.serviceModelResponse = [];
  }

  ngOnInit(): void {
    this.getGeneralInfo();
    this.getStation();
    Aos.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
    );
  }
  getGeneralInfo() {
    this.GeneralInfoModelResponse = [];
    this.API.getdata('/Menzies/getGeneralList').subscribe(
      data => {

        if (data != null) {

          this.GeneralInfoModelResponse = data.GeneralList;
          var aboutUs=this.GeneralInfoModelResponse.find(c=>c.infoID==3);
          if(aboutUs!=null) {
            this.aboutDetail=aboutUs.infoDetail;
          }
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

}
