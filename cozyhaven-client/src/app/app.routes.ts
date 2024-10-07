import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login-page/login-page.component';
import { HomeComponent } from './views/home/home.component';

import { FlightProviderComponent } from './views/Flight-Booking/flight-provider/flight-provider.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PackageBookingComponent } from './views/package-booking/package-booking.component';

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
import { FlightPaymentComponent } from './components/flight-payment/flight-payment.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';
import { FlightProviderFlightsComponent } from './components/flight-provider-flights/flight-provider-flights.component';
import { FlightProviderStopsComponent } from './components/flight-provider-stops/flight-provider-stops.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { ProfileComponent } from './components/profile/profile.component';


export const routes: Routes = [
    {
        "path":"", component: LoginPageComponent
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
        "path":"flight-search", component: FlightSearchComponent, canActivate: [AuthGuard]

    },
    {
        "path":"fetched-flights", component: FetchedFlightsComponent, canActivate: [AuthGuard]
    },
    {
        "path":"holiday-packages", component: PackageBookingComponent, canActivate: [AuthGuard]
    },
    {
        "path":"fetchflight", component: FlightCardComponent, canActivate: [AuthGuard]
    },
    {
        "path":"flights/booking/:flightId/:bookingId", component: ConfirmFlightBookingComponent, canActivate: [AuthGuard]
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
        "path":"**", component: PageNotFoundComponent
    }
];
