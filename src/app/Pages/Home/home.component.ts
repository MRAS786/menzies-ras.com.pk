import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/Services/API/api.service';
import { modelResponse, serviceModelResponse } from './homeModel';
import { Router } from '@angular/router';
import { ServicesResponse, serviceModelResponseFooter, MenuResponse } from '..//Home/homeModel';
import { GvarService } from 'src/app/Services/gvar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted: boolean = false;


  MenuResponse: MenuResponse[];
  ServicesResponse: ServicesResponse[];
  serviceModelResponseFooter: serviceModelResponseFooter[];

  ClientDesc: any;
  ClientHeading: any;
  CertDesc: any;
  ClientLogo: any;
  CertHeading: any;
  CertLogo: any;
  certificateModelResponse: any;
  clientModelResponse: any;
  statsResponse: any;
  newsModelResponse: modelResponse[];
  serviceModelResponse: serviceModelResponse[];
  fileToUpload: any = null;
  imageUrl: any;
  constructor(public API: ApiService, public router: Router, public GV: GvarService) {

    this.serviceModelResponse = [];
    this.newsModelResponse = [];
    this.clientModelResponse = [];
    this.certificateModelResponse = [];
    this.statsResponse = [];

    this.serviceModelResponseFooter = [];
    this.ServicesResponse = [];
    this.MenuResponse = [];
  }

  ngOnInit(): void {
    this.getCertificate();
    this.getNews();
    this.getClient();
    this.getService();
    this.getStats();

    // this.getServices();
    this.getStation();
    this.getSubMenus();
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
      offset: 10, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
    );
  }
  clientslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  serviceslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  getStats() {
    window.scroll(0, 0);
    this.statsResponse = [];
    this.API.getdata('/Menzies/getStats_Web').subscribe(
      data => {
        if (data != null) {
          this.statsResponse = data.getstats;
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

  getService() {
    window.scroll(0, 0);
    this.serviceModelResponse = [];
    this.API.getdata('/Menzies/getServiceList_Web').subscribe(
      data => {
        if (data != null) {
          this.serviceModelResponse = data.ServiceList;
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

  getClient() {
    this.clientModelResponse = [];
    this.API.getdata('/Menzies/getClientList_Web').subscribe(
      data => {
        if (data != null) {
          this.clientModelResponse = data.ClientList;
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
  getNews() {

    this.newsModelResponse = [];
    this.API.getdata('/Menzies/getNewsListTopThree').subscribe(
      data => {
        if (data != null) {
          this.newsModelResponse = data.NewsList;
          this.newsModelResponse.forEach((x: any) => {
            if (x.newsDetails.length > 118) {
              x.newStr = x.newsDetails.substring(0, 118) + '...';
            }
            else {
              x.newStr = x.newsDetails;
            }
          })
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

  getCertificate() {
    this.certificateModelResponse = [];
    this.API.getdata('/Menzies/getCertificateList_Web').subscribe(
      data => {
        if (data != null) {
          this.certificateModelResponse = data.CertificateList;
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
  seeDescription(data: any) {

    this.ClientDesc = "";
    this.ClientLogo = "";
    this.ClientHeading = "";
    this.ClientHeading = data.clientName;
    this.ClientLogo = data.clientLogo;
    this.ClientDesc = data.clientDescription;
  }

  seeCertDes(data: any) {

    this.CertDesc = "";
    this.CertLogo = "";
    this.CertHeading = "";
    this.CertHeading = data.certificateName;
    this.CertLogo = data.certificateLogo;
    this.CertDesc = data.certificateDescription;
  }




  getStation() {
    this.serviceModelResponse = [];
    this.API.getdata('/Menzies/getStationList_Web').subscribe(
      data => {
        if (data != null) {
          this.serviceModelResponseFooter = data.stationList;
          this.GV.ServiceModelResponseFooterReplica = this.serviceModelResponseFooter;
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
  getServices() {
    this.ServicesResponse = [];
    this.API.getdata('/Menzies/getServiceList_Web').subscribe(
      data => {
        if (data != null) {
          this.ServicesResponse = data.ServiceList;
          this.GV.ServicesResponseReplica = this.ServicesResponse;
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
          //subServiceId
          this.MenuResponse = data.ServiceList;
          this.GV.MenuResponseReplica = this.MenuResponse;
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
