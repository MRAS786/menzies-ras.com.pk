import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { FooterComponent } from './Pages/Shared/Footer/footer.component';
import { LayoutComponent } from './Pages/Shared/Layout/layout.component';
import { TopbarComponent } from './Pages/Shared/Topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GroundserviceComponent } from './Pages/Services/GroundServices/groundservice.component';
import { ContactComponent } from './Pages/Contacts/contact.component';
import { CargohandlingserviceComponent } from './Pages/Services/CargoHandlingService/cargohandlingservice.component';
import { OurteamComponent } from './Pages/OurTeam/ourteam.component';
import { CareerComponent } from './Pages/Careers/career.component';
import { AboutComponent } from './Pages/About/about.component';
import { TickettravelserviceComponent } from './Pages/Services/TicketTravelService/tickettravelservice.component';
import { NewsComponent } from './Pages/News/news.component';
import { CargosaleserviceComponent } from './Pages/Services/CargoSalesService/cargosaleservice.component';
import { LocationComponent } from './Pages/Location/location.component';
import { LoginComponent } from './Pages/Login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './Services/API/api.service';
import { SubServicesComponent } from './Pages/subServices/sub-services.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SliderComponent } from './Pages/Slider/slider.component';
import { Safe } from './Pipes/safe-html.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AssociatecompanyComponent } from './Pages/AssociateCompany/associatecompany.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ClientsComponent } from './Pages/Clients/clients.component';
import { CooperativeCLientsComponent } from './Pages/CorporateClients/cooperative-clients.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    Safe,
    AppComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent,
    TopbarComponent,
    GroundserviceComponent,
    ContactComponent,
    CargohandlingserviceComponent,
    OurteamComponent,
    CareerComponent,
    AboutComponent,
    TickettravelserviceComponent,
    NewsComponent,
    CargosaleserviceComponent,
    LocationComponent,
    LoginComponent,
    SubServicesComponent,
    SliderComponent,
    AssociatecompanyComponent,
    ClientsComponent,
    CooperativeCLientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    OwlModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CollapseModule,
    NgxCaptchaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYPW_K1TayQrEX3myu-TMa5CFAirlExkY'
    }),
  ],
  providers: [ApiService, HttpClientModule,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
