import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login-page/login-page.component';
import { HomeComponent } from './views/home/home.component';

import { FlightProviderComponent } from './views/Flight-Booking/flight-provider/flight-provider.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FetchedFlightsComponent } from './views/Flight-Booking/fetched-flights/fetched-flights.component';
import { BusSearchComponent } from './views/Bus-Booking/bus-search/bus-search.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';

import { HotelProviderComponent } from './views/Hotel-Booking/hotel-provider/hotel-provider.component';
import { HotelSearchComponent } from './views/Hotel-Booking/hotel-search/hotel-search.component';
import { HotelsComponent } from './views/Hotel-Booking/hotels/hotels.component';
import { HotelListComponent } from './views/Hotel-Booking/hotel-list/hotel-list.component';
import { AddHotelComponent } from './views/Hotel-Booking/add-hotel/add-hotel.component';

import { ConfirmFlightBookingComponent } from './views/Flight-Booking/confirm-flight-booking/confirm-flight-booking.component';
import { AuthGuard } from './guard/auth.guard';
import { CustomerAddComponent } from './auth/signup/customer-add/customer-add.component';
import { ServiceProviderAddComponent } from './auth/signup/service-provider-add/service-provider-add.component';
import { BusProviderComponent } from './views/Bus-Booking/bus-provider/bus-provider.component';
import { FlightSearchComponent } from './views/Flight-Booking/flight-search/flight-search.component';
import { PackageSearchComponent } from './views/Holiday-Package/package-search/package-search.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { RoomImagesComponent } from './components/room-images/room-images.component';
import { SteppercomponentComponent } from './components/steppercomponent/steppercomponent.component';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { PackageBookingComponent } from './views/Holiday-Package/package-booking/package-booking.component';
import { RoomTypeComponent } from './components/room-type/room-type.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { RoomDetailsComponent } from './views/Hotel-Booking/room-details/room-details.component';
import { AddAmenitiesComponent } from './components/add-amenities/add-amenities.component';
import { MyRoomCardComponent } from './components/my-room-card/my-room-card.component';
import { Component } from '@angular/core';
import { EditHotelComponent } from './components/edit-hotel/edit-hotel.component';
import { UpdataStatusComponent } from './views/Hotel-Booking/updata-status/updata-status.component';
import { ReviewCardComponent } from './views/Hotel-Booking/review-card/review-card.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { MyAddedRoomCardComponent } from './components/my-added-room-card/my-added-room-card.component';
import { EditImageComponent } from './views/Hotel-Booking/edit-image/edit-image.component';
import { BookingDetailsComponent } from './views/Hotel-Booking/booking-details/booking-details.component';
import { ReviewBookingComponent } from './views/Hotel-Booking/review-booking/review-booking.component';
import { HotelImagesComponent } from './components/hotel-images/hotel-images.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { FlightPaymentComponent } from './components/flight-payment/flight-payment.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';
import { FlightProviderFlightsComponent } from './components/flight-provider-flights/flight-provider-flights.component';
import { FlightProviderStopsComponent } from './components/flight-provider-stops/flight-provider-stops.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyFlightInfoComponent } from './components/my-flight-info/my-flight-info.component';
import { EditFlightRouteComponent } from './components/edit-flight-route/edit-flight-route.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { DashboardComponent } from './views/Hotel-Booking/dashboard/dashboard.component';
import { AssesmentComponent } from './components/assesment/assesment.component';


export const routes: Routes = [
    
    {
        "path":"",component:LoginPageComponent
    },
    {
        "path":"signup", component: CustomerAddComponent
    },
    {
        "path":"signup/service-provider", component: ServiceProviderAddComponent
    },
    {
        "path":"home", component: HomeComponent, canActivate: [AuthGuard]
    },
    {
        "path":"hotel-provider",component:HotelProviderComponent
    },
    {
        "path":"hotel-booking/hotel-list",component:HotelListComponent
    },
    {
        "path":"hotel-booking/add-hotel",component:AddHotelComponent
    },
    {
        "path":"stepper",component:SteppercomponentComponent
    },
    {
        "path":"add-room/:id",component:AddRoomComponent
    },
    {
        "path":"room-images/:hotelId/:roomId",component:RoomImagesComponent
    },
    {
        "path":"bus-provider", component: BusProviderComponent, canActivate: [AuthGuard]
    },
    {
        "path":"flight-provider", component: FlightProviderComponent, canActivate: [AuthGuard]
    },
    {
        "path":"bus-search", component: BusSearchComponent, canActivate: [AuthGuard]
    },
    {
        "path":"hotel-search",component:HotelSearchComponent
    },
    {
        "path":"hotels",component:HotelsComponent
    },
    {
        "path":"flight-search", component: FlightSearchComponent, canActivate: [AuthGuard]
    },
    {
        "path":"fetched-flights", component: FetchedFlightsComponent, canActivate: [AuthGuard]
    },
    {
        "path":"package-search", component: PackageSearchComponent, canActivate: [AuthGuard]
    },
    {
        "path":"fetchflight", component: FlightCardComponent, canActivate: [AuthGuard]
    },
    {
        "path":"flights/booking/:flightId/:bookingId", component: ConfirmFlightBookingComponent, canActivate: [AuthGuard]
    },
    {
        "path":"hotel-provider",component:HotelProviderComponent
    },
    {
         "path":"dashboard",component:DashboardComponent
    },
    {
        "path":"view-list",component:HotelListComponent
    },
    {
       "path":"update-status",component:UpdataStatusComponent   
    },
    {
        "path":"review-card",component:ReviewCardComponent
    },
    {
         "path":"edit-hotel/:id",component:EditHotelComponent
    },
    {
          "path":"edit-room/:hotelId/:roomId",component:EditRoomComponent
    },
    {
        "path":"add-hotel",component:AddHotelComponent
    },
    {
        "path":"hotel-image/:id",component:HotelImagesComponent
    },
    {
        "path":"add-room/:id",component:AddRoomComponent
    },
    {
        "path":"my-room-card/:id",component:MyRoomCardComponent
    },
    {
        "path":"edit-image/:id/:roomId",component:EditImageComponent
    },
    {
        "path":"my-addedRoom-card/:id",component:MyAddedRoomCardComponent
    },
    {
        "path":"review-booking",component:ReviewBookingComponent
    },

    {
         "path":"room-images/:id",component:RoomImagesComponent
    },
    {
        "path":"hotel-images/:hotelId",component:HotelImagesComponent
    },
    {
        "path":"add-amenities/:hotelId/:id",component:AddAmenitiesComponent
    },
    {
        "path":"hotel-card",component:HotelCardComponent

    },
    {
        "path":"room-type/:hotelId",component:RoomTypeComponent
    },
    {
        "path":"room-details/:hotelId/:roomId",component:RoomDetailsComponent
    },
    
    {
        "path":"booking-details/:bookingId",component:BookingDetailsComponent
    },
    {
        "path":"add-review/:hotelId",component:AddReviewComponent
    },
    {
        "path":"flight/booking/payment/:bookingId", component: FlightPaymentComponent, canActivate: [AuthGuard]
    },
    {
        "path":"my-bookings", component: CustomerHistoryComponent, canActivate: [AuthGuard]
    },
    {
        "path":"my-flights", component: FlightProviderFlightsComponent, canActivate: [AuthGuard]
    },
    {
        "path":"flight-stops", component: FlightProviderStopsComponent, canActivate: [AuthGuard]
    },
    {
        "path":"add-flight", component: AddFlightComponent, canActivate: [AuthGuard]
    },
    {
        "path":"profile", component: ProfileComponent, canActivate: [AuthGuard]
    },
    {
        "path":"my-flight-info/:flightId", component: MyFlightInfoComponent, canActivate: [AuthGuard]
    },
    {
        "path":"edit-flight-route/:flightId", component: EditFlightRouteComponent, canActivate: [AuthGuard]
    },
    {
        "path":"add-offer/:flightId", component: AddOfferComponent, canActivate: [AuthGuard]
    },
    {
        "path":"edit-offer/:flightId/:offerId", component: EditOfferComponent, canActivate: [AuthGuard]
    },
    {
        "path":"assesment",component:AssesmentComponent
    },
    {
        "path":"**", component: PageNotFoundComponent
    }
];
