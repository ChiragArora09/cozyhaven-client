import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login-page/login-page.component';
import { HomeComponent } from './views/home/home.component';
import { BusProviderComponent } from './views/Bus-Booking/bus-provider/bus-provider.component';
import { FlightProviderComponent } from './views/Flight-Booking/flight-provider/flight-provider.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PackageBookingComponent } from './views/package-booking/package-booking.component';
import { FlightSearchComponent } from './views/Flight-Booking/flight-search/flight-search.component';
import { FetchedFlightsComponent } from './views/Flight-Booking/fetched-flights/fetched-flights.component';
import { BusSearchComponent } from './views/Bus-Booking/bus-search/bus-search.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { HotelProviderComponent } from './views/Hotel-Booking/hotel-provider/hotel-provider.component';
import { HotelSearchComponent } from './views/Hotel-Booking/hotel-search/hotel-search.component';
import { HotelsComponent } from './views/Hotel-Booking/hotels/hotels.component';
import { HotelListComponent } from './views/Hotel-Booking/hotel-list/hotel-list.component';
import { AddHotelComponent } from './views/Hotel-Booking/add-hotel/add-hotel.component';



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
        "path":"hotel-provider",component:HotelProviderComponent
    },
    {
        "path":"hotel-booking/hotel-list",component:HotelListComponent
    },
    {
        "path":"hotel-booking/add-hotel",component:AddHotelComponent
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
        "path":"hotel-search",component:HotelSearchComponent
    },
    {
        "path":"hotels",component:HotelsComponent
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
