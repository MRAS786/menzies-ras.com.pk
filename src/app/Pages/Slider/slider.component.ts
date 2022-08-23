import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  hardCodeARr:{
    id:number,
    src: string}[]= [
    //  {"id": 0, "src": "../../../assets/Slider/pic1.jpg"} ,
    //  {"id": 1, "src": "../../../assets/Slider/pic1.jpg"} ,
     {"id": 2, "src": "../../../assets/Slider/video.mp4"} ,
    ];

  title = 'owlcarouselinAngular';
  Images = this.hardCodeARr;

  temp='../'
  SlideOptions = { items: 1, nav: true, dots: true, loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    video:true,
  };
  constructor() { }

  ngOnInit(): void {
    this.Images = this.hardCodeARr;
    Aos.init();
  }

  bannerslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    navSpeed: 1000,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
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

}
