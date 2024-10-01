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


export const routes: Routes = [
    {
        "path":"", component: LoginPageComponent
    },
    {
        "path":"home", component: HomeComponent
    },
    {
        "path":"bus-provider", component: BusProviderComponent
    },
    {
        "path":"flight-provider", component: FlightProviderComponent
    },
    {
        "path":"bus-search", component: BusSearchComponent
    },
    {
        "path":"flight-search", component: FlightSearchComponent
    },
    {
        "path":"fetched-flights", component: FetchedFlightsComponent
    },
    {
        "path":"hotel-booking", component: HotelBookingComponent
    },
    {
        "path":"holiday-packages", component: PackageBookingComponent
    },
    {
        "path":"fetchflight", component: FlightCardComponent
    },
    {
        "path":"**", component: PageNotFoundComponent
    }
];
