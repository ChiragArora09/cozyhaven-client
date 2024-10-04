import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login-page/login-page.component';
import { HomeComponent } from './views/home/home.component';
import { BusProviderComponent } from './views/Bus-Booking/bus-provider/bus-provider.component';
import { FlightProviderComponent } from './views/Flight-Booking/flight-provider/flight-provider.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HotelBookingComponent } from './views/hotel-booking/hotel-booking.component';
import { PackageBookingComponent } from './views/package-booking/package-booking.component';
import { FlightSearchComponent } from './views/Flight-Booking/flight-search/flight-search.component';
import { FetchedFlightsComponent } from './views/Flight-Booking/fetched-flights/fetched-flights.component';
import { BusSearchComponent } from './views/Bus-Booking/bus-search/bus-search.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { ConfirmFlightBookingComponent } from './views/Flight-Booking/confirm-flight-booking/confirm-flight-booking.component';
import { AuthGuard } from './guard/auth.guard';
import { CustomerAddComponent } from './auth/signup/customer-add/customer-add.component';
import { ServiceProviderAddComponent } from './auth/signup/service-provider-add/service-provider-add.component';


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
        "path":"bus-provider", component: BusProviderComponent, canActivate: [AuthGuard]
    },
    {
        "path":"flight-provider", component: FlightProviderComponent, canActivate: [AuthGuard]
    },
    {
        "path":"bus-search", component: BusSearchComponent, canActivate: [AuthGuard]
    },
    {
        "path":"flight-search", component: FlightSearchComponent, canActivate: [AuthGuard]
    },
    {
        "path":"fetched-flights", component: FetchedFlightsComponent, canActivate: [AuthGuard]
    },
    {
        "path":"hotel-booking", component: HotelBookingComponent, canActivate: [AuthGuard]
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
        "path":"**", component: PageNotFoundComponent
    }
];
