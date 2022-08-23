import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/API/api.service';

@Component({
  selector: 'app-associatecompany',
  templateUrl: './associatecompany.component.html',
  styleUrls: ['./associatecompany.component.css']
})
export class AssociatecompanyComponent implements OnInit {
  companyResponse:any;
  constructor(public API: ApiService) {
    this.companyResponse=[];
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.companyResponse = [];
    this.API.getdata('/Menzies/getCompanyList').subscribe(
      data => {
        if (data != null) {
          this.companyResponse = data.getcompany;
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
