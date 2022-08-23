import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/API/api.service';

@Component({
  selector: 'app-cooperative-clients',
  templateUrl: './cooperative-clients.component.html',
  styleUrls: ['./cooperative-clients.component.css']
})
export class CooperativeCLientsComponent implements OnInit {

  clientModelResponse: any;  ClientDesc: any;
  ClientHeading: any;
  CertDesc: any;
  ClientLogo: any;
  CertHeading: any;
  CertLogo: any;
  
  constructor(private API: ApiService) {
    this.clientModelResponse = [];
  }

  ngOnInit(): void {
    this.getClient();
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
  seeDescription(data: any) {

    this.ClientDesc = "";
    this.ClientLogo = "";
    this.ClientHeading = "";
    this.ClientHeading = data.clientName;
    this.ClientLogo = data.clientLogo;
    this.ClientDesc = data.clientDescription;
  }
}
