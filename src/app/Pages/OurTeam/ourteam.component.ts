import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ApiService } from 'src/app/Services/API/api.service';
import { teamModelResponse } from './team.Model';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})

export class OurteamComponent implements OnInit {
  teamModelResponse: teamModelResponse[];
  constructor(private API: ApiService) {
    this.teamModelResponse = [];
  }

  ngOnInit(): void {
    Aos.init();
    this.callFunc();
    this.getTeam();
  }
  callFunc() {
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
  getTeam() {

    this.teamModelResponse = [];
    this.API.getdata('/Menzies/getTeam_Web').subscribe(
      data => {
        if (data != null) {
          this.teamModelResponse = data.TeamList;
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

  showDetail(data: any) {
    if (data.teamId == 3) {
      var elem = document.getElementById('btnClickteamID3');
      if (elem) {
        elem.click();
      }
    }
    if (data.teamId == 4) {
      var elem = document.getElementById('btnClickteamID4');
      if (elem) {
        elem.click();
      }
    }
  }
}
