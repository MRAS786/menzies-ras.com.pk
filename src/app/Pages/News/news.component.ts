import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ApiService } from 'src/app/Services/API/api.service';
import { modelResponse } from './NewsModel';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  imageSRC: any;
  newsDescription: any;
  showNews: boolean = false;
  newsCreatedDate: any;
  newsModelResponse: modelResponse[];
  newsModelResponseReplica: modelResponse[];
  constructor(public API: ApiService) {
    this.newsModelResponse = [];
    this.newsModelResponseReplica = [];
  }

  ngOnInit(): void {
    this.getNews();
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
  getNews() {
    
    this.newsModelResponse = [];
    this.API.getdata('/Menzies/getNewsList_Web').subscribe(
      data => {
        if (data != null) {
          
          this.newsModelResponse = data.NewsList;
          if (data.NewsList.length > 10) {
            this.newsModelResponseReplica = data.NewsList.slice(0, 10);
          }
          else {
            this.newsModelResponseReplica = data.NewsList;
          }
          this.imageSRC = this.newsModelResponse[0].newsImage;
          this.newsDescription = this.newsModelResponse[0].newsDetails;
          this.newsCreatedDate = this.newsModelResponse[0].createdDate;
          this.showNews = true;

          this.newsModelResponse.forEach((x: any) => {
            if (x.newsDetails.length > 110) {
              x.newStr = x.newsDetails.substring(0, 110) + '...';
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
  ShowNews(obj: any) {
    
    this.showNews = true;
    this.imageSRC = obj.newsImage
    this.newsDescription = obj.newsDetails;
    this.newsCreatedDate = obj.createdDate;
  }

  showAll() {
    this.newsModelResponseReplica = this.newsModelResponse;
  }
}
