import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { ApiService } from 'src/app/Services/API/api.service';
import { GvarService } from 'src/app/Services/gvar.service';
import Swal from 'sweetalert2';
import { jobModelResponse } from './Career.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  jobModelResponse:jobModelResponse[];
  constructor(private route: ActivatedRoute, private router: Router, private API: ApiService, private GV: GvarService) { 
    this.jobModelResponse=[];
  }

  ngOnInit(): void {
    this.getjobs()
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
      offset: 20, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
    );
  }
  getjobs() {
    this.jobModelResponse = [];
    this.API.getdata('/Menzies/getjobs').subscribe(
      data => {
        if (data != null) {
          this.jobModelResponse = data.jobRequest;
        }
        else {
        }
      },
      error => {
        Swal.fire({
          text: error.error.Message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }
}

