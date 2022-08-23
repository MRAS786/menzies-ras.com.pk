import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/About/about.component';
import { AssociatecompanyComponent } from './Pages/AssociateCompany/associatecompany.component';
import { CareerComponent } from './Pages/Careers/career.component';
import { ClientsComponent } from './Pages/Clients/clients.component';
import { ContactComponent } from './Pages/Contacts/contact.component';
import { CooperativeCLientsComponent } from './Pages/CorporateClients/cooperative-clients.component';
import { HomeComponent } from './Pages/Home/home.component';
import { LocationComponent } from './Pages/Location/location.component';
import { LoginComponent } from './Pages/Login/login.component';
import { NewsComponent } from './Pages/News/news.component';
import { OurteamComponent } from './Pages/OurTeam/ourteam.component';
import { CargohandlingserviceComponent } from './Pages/Services/CargoHandlingService/cargohandlingservice.component';
import { CargosaleserviceComponent } from './Pages/Services/CargoSalesService/cargosaleservice.component';
import { GroundserviceComponent } from './Pages/Services/GroundServices/groundservice.component';
import { TickettravelserviceComponent } from './Pages/Services/TicketTravelService/tickettravelservice.component';
import { LayoutComponent } from './Pages/Shared/Layout/layout.component';
import { SubServicesComponent } from './Pages/subServices/sub-services.component'

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Location', component: LocationComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Career', component: CareerComponent },
      { path: 'News', component: NewsComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'OurTeam', component: OurteamComponent },
      { path: 'Clients', component: ClientsComponent },
      { path: 'CorporateClients', component: CooperativeCLientsComponent },
      { path: 'CargoHandlingService', component: CargohandlingserviceComponent },
      { path: 'Groundservice', component: GroundserviceComponent },
      { path: 'TicketTravel', component: TickettravelserviceComponent },
      { path: 'CargoSales', component: CargosaleserviceComponent },
      { path: 'Services/:id', component: SubServicesComponent },
      { path: 'Location/:id', component: LocationComponent },
      { path: 'Associate', component: AssociatecompanyComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
