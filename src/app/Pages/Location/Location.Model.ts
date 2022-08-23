export class stationServiceModelResponse {
  stationServiceId:string="";
  stationName:string="";
  stationDescription:string="";
  stationServiceImage:string="";
  isActive:string="";
}
export class SubStationModelResponse {
  subStationServiceId :string="";
  subStationServiceName :string="";
  subStationServiceDescription :string="";
  isActive :string="";
 }
 export class contactStationStaffModelResponse {
  contactStationStaffId :string="";
  staffDesignation :string="";
  isActive :string="";
  stationId :string="";
 }
 export class stationcontactModelResponse {
  contactId:string="";
  contactName:string="";
  stationServiceId:string="";
  contactDesignation:string="";
  contactAddress:string="";
  stationName:string="";
  isActive:string="";
  contactPhone:string="";
  contactLocation:string="";
  stationId:string="";
  workingHour:string="";
  workingDays:string="";
}
export class RequestSubStationSerive{
  stationId:string="";
  subStationServiceDescription:string="";
  subStationServiceName="";
}
export class RequestStationSerive{
  stationDescription:string="";
  stationId:string="";
  stationName:string="";
  stationServiceId:string="";
  stationServiceImage:string="";
  stationServiceName:string="";
}
export class RequestStationContact{
  contactAddress:string="";
  contactDesignation:string="";
  contactId:string="";
  contactLocation:string="";
  contactName:string="";
  contactPhone:string="";
  stationId:string="";
}
export class statsRequest{
   stationId : string="";
   stationName : string="";
   statID : string="";
   line1 : string="";
    line2 : string="";
     ine3 : string="";
}
export class ResponseModel {
  RequestStationSerive: RequestStationSerive;
  RequestSubStationSerive: RequestSubStationSerive[];
  statsRequest:statsRequest[];
  RequestStationContact: RequestStationContact;
  constructor() {
      this.statsRequest=[];
      this.RequestSubStationSerive = [];
      this.RequestStationSerive = new RequestStationSerive();
      this.RequestStationContact = new RequestStationContact();
  }
}
