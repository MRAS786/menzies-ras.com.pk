import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/API/api.service';
import { categoryModelResponse, GeneralInfoModelResponse, GetSubgaterotyModelResponse, MenuResponse } from './Topbar.Model';
import {SubServicesComponent} from '../../subServices/sub-services.component'
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class TopbarComponent implements OnInit {
  MenuResponse: MenuResponse[];
  mailus: string = "";
  maildetail: string = "";
  callus: string = "";
  callusDetail: string = "";
  navbarfixed: boolean = false;
  SubcategoryModelResponse: any;
  GeneralInfoModelResponse: GeneralInfoModelResponse[];
  GetSubgaterotyModelResponse: GetSubgaterotyModelResponse[];
  categoryModelResponse: categoryModelResponse[];
  constructor(public API: ApiService, public router: Router) {
    this.categoryModelResponse = [];
    this.GetSubgaterotyModelResponse = [];
    this.GeneralInfoModelResponse = [];
    this.MenuResponse = [];
  }

  ngOnInit(): void {
    this.getCategory();
    this.getSubCategory();
    // this.getGeneralInfo();
    this.getSubMenus();
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }
  getCategory() {
    this.categoryModelResponse = [];
    this.GetSubgaterotyModelResponse = [];
    this.API.getdata('/Menzies/getCategoryList_Web').subscribe(
      data => {
        if (data != null) {
          
          this.categoryModelResponse = data.CategoryList;
          this.GetSubgaterotyModelResponse = data.SubCategoryList;
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

  getSubCategory() {
    this.SubcategoryModelResponse = [];
    this.API.getdata('/Menzies/getSubCategoryList').subscribe(
      data => {
        if (data != null) {
          this.SubcategoryModelResponse = data.SubCategoryList;
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

  getGeneralInfo() {
    this.GeneralInfoModelResponse = [];
    this.API.getdata('/Menzies/getGeneralList').subscribe(
      data => {
        if (data != null) {
          this.GeneralInfoModelResponse = data.GeneralList;
          var callData = this.GeneralInfoModelResponse.find(c => c.infoID == 1);
          if (callData != null) {
            this.callus = callData.Information;
            this.callusDetail = callData.infoDetail;
          }
          var mailinfo = this.GeneralInfoModelResponse.find(c => c.infoID == 2);
          if (mailinfo != null) {
            this.mailus = mailinfo.Information;
            this.maildetail = mailinfo.infoDetail;
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

  changeRoute(p: any) {

    if (p == "About") {
      this.router.navigate(['About']);
    }
    if (p == "Home") {

      this.router.navigate(['Home']);
    }
    if (p == "Careers") {
      this.router.navigate(['Career']);
    }
    if (p == "News") {
      this.router.navigate(['News']);
    }
    if (p == "Contact Us") {
      this.router.navigate(['Contact']);
    }
    if (p == "Our Team") {
      this.router.navigate(['OurTeam']);
    }
  }
  changeRouteSubCategory(p: any) {
    if (p == "Cargo Handling Services") {
      this.router.navigate(['/Services/12']);
    }
    if (p == "Ground Handling Services") {
      this.router.navigate(['/Services/11']);
    }
    if (p == "Travel and Ticketing Services") {
      this.router.navigate(['/Services/13']);
    }
    if (p == "Charter Services") {
      this.router.navigate(['/Services/15']);
    }
    if (p == "Air Menzies") {
      this.router.navigate(['/Associate']);
    }
    if (p == "Commercial Clients") {
      this.router.navigate(['/Clients']);
    }
    if (p == "Corporate Clients") {
      this.router.navigate(['/CorporateClients']);
    }
    if (p == "Associated Companies") {
      this.router.navigate(['/Associate']);
    }
  }

  getSubMenus() {
    this.MenuResponse = [];
    this.API.getdata('/Menzies/getSubServiceList_webb').subscribe(
      data => {
        if (data != null) {
          //subServiceId
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
}
