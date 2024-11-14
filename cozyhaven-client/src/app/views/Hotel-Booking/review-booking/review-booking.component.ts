import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { Chart } from 'chart.js';
import { ViewhotelService } from '../../../service/viewhotel.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HotelProviderComponent } from '../hotel-provider/hotel-provider.component';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-review-booking',
  standalone: true,
  imports: [NgFor,RouterLink,HotelProviderComponent,ChartModule],
  templateUrl: './review-booking.component.html',
  styleUrl: './review-booking.component.css'
})
export class ReviewBookingComponent{
//   chart: any;

//   constructor(private hotelService: HotelService) {}

//   ngOnInit(): void {
//     this.loadChartData('Chennai');  // Default location
//   }

//   onLocationChange(event: any): void {
//     const location = event.target.value;
//     this.loadChartData(location);
//   }

//   loadChartData(location: string): void {
//     this.hotelService.getBookedRoomsByLocation(location).subscribe(data => {
//       const hotelNames = data.map(item => item.hotelName);
//       const bookedRooms = data.map(item => item.totalBookedRooms);

//       this.renderChart(hotelNames, bookedRooms);
//     });
//   }

//   renderChart(labels: string[], data: number[]): void {
//     console.log()
//     if (this.chart) {
//       this.chart.destroy();
//     }

//     this.chart = new Chart('barChart', {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Total Booked Rooms',
//           data: data,
//           backgroundColor: '#36A2EB',
//         }],
//       },
//       options: {
//         responsive: true,
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }

// }


// onLocationChange(e:any){
//   this.hotelRoomsLabel= []
//   this.bookedRooms= []
//   this.barOptions={}
//   this.hotelRoomsBarData={}
//       this.hotelService.getRoomList(e.target.value).subscribe({
//         next:(data)=>{
//           for(let d of data){
//             this.hotelRoomsLabels.push(d.roomType)
//             this.bookedRooms.push(d.bookedRooms)
           
//           }
//           this.hotelRoomsBarData={

//             labels:this.hotelRoomsLabels,
//             datasets: [
//               {
//                 label: 'Booked Rooms',
//                 data: this.bookedRooms,
//                 backgroundColor: '#42A5F5',
//                 barThickness:50 
//               },
//             ]
//           },
//           this.barOptions={
//             scales: {
//               x: {
//                 beginAtZero: true,
//                 grid: {
//                   display: false, // Optional: Hides the vertical grid lines
//                 }
//               },
//               y: {
//                 beginAtZero: true,
//                 grid: {
//                   color: '#e0e0e0', // Optional: Changes color of grid lines
//                 }
//               }
//             },
//             plugins: {
//               legend: {
//                 display: true, // Displays the legend
//                 position: 'top',
//               },
//               tooltip: {
//                 enabled: true,
//               }
//             },
//             responsive: true,
//             maintainAspectRatio:true
//           }
//         },
//         error:(err)=>{
//           console.log(err.msg)
//         }
//       })
  
// }

// hotels:any[]=[];
// rooms:any[]=[];
// hotelRoomsLabel:any[]=[]
// bookedRooms:any[]=[]
// barOptions:any
// hotelRoomsBarData:any
// hotelRoomsLabels: any[] = []
// locationList:string[]=[];

// constructor(private viewhotel:ViewhotelService,private route:ActivatedRoute,private hotelService:HotelService){
//   this.viewhotel.getHotelList().subscribe({
//     next:(data)=>{
//       this.hotels=data
//     },
//     error:(err)=>{
//       console.log(err.message)
//     }
//   })
// }
// selectedLocation: string = ''; // Add a property for the selected location

// ngOnInit() {
//   // Assuming this.locationList is populated with location data before this point
//   if (this.locationList && this.locationList.length > 0) {
//     this.selectedLocation = this.locationList[0]; // Set the first location as the default
//     this.onLocationChange({ target: { value: this.selectedLocation } }); // Load data for the default location
//   }
// }

// onLocationChange(e: any) {
//   // Reset the labels and data arrays
//   this.hotelRoomsLabel = [];
//   this.bookedRooms = [];
//   this.hotelRoomsBarData = {};

//   this.hotelService.getRoomList(e.target.value).subscribe({
//     next: (data) => {
//       // Create a Set to store unique room types
//       const uniqueRoomTypes = new Set();

//       for (let d of data) {
//         if (!uniqueRoomTypes.has(d.roomType)) {
//           uniqueRoomTypes.add(d.roomType); // Add room type to Set to prevent duplicates
//           this.hotelRoomsLabel.push(d.roomType);
//           this.bookedRooms.push(d.bookedRooms);
//         }
//       }

//       this.hotelRoomsBarData = {
//         labels: this.hotelRoomsLabel,
//         datasets: [
//           {
//             label: 'Booked Rooms',
//             data: this.bookedRooms,
//             backgroundColor: '#42A5F5',
//             barThickness: 50
//           }
//         ]
//       };

//       this.barOptions = {
//         scales: {
//           x: {
//             beginAtZero: true,
//             grid: {
//               display: false
//             }
//           },
//           y: {
//             beginAtZero: true,
//             grid: {
//               color: '#e0e0e0'
//             }
//           }
//         },
//         plugins: {
//           legend: {
//             display: true,
//             position: 'top'
//           },
//           tooltip: {
//             enabled: true
//           }
//         },
//         responsive: true,
//         maintainAspectRatio: true
//       };
//     },
//     error: (err) => {
//       console.log(err.message);
//     }
//   });
// }

//  }

  hotels: any[] = []; // List of hotels
  rooms: any[] = [];
  hotelRoomsLabel: any[] = [];
  bookedRooms: any[] = [];
  barOptions: any;
  hotelRoomsBarData: any;
  selectedLocation: string = ''; // Selected location ID

  constructor(
    private viewhotel: ViewhotelService,
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit() {
    // Fetch the list of hotels
    this.viewhotel.getHotelList().subscribe({
      next: (data) => {
        this.hotels = data;
        if (this.hotels.length > 0) {
          // Set the first location as the default and load data
          this.selectedLocation = this.hotels[0].id;
          this.loadRoomData(this.selectedLocation);
        }
      },
      error: (err) => {
        console.log('Error fetching hotel list:', err.message);
      }
    });
  }

  // Load room data based on the selected location
  loadRoomData(locationId: string) {
    this.hotelRoomsLabel = [];
    this.bookedRooms = [];

    this.hotelService.getRoomList(locationId).subscribe({
      next: (data) => {
        const uniqueRoomTypes = new Set();

        for (let d of data) {
          if (!uniqueRoomTypes.has(d.roomType)) {
            uniqueRoomTypes.add(d.roomType);
            this.hotelRoomsLabel.push(d.roomType);
            this.bookedRooms.push(d.bookedRooms);
          }
        }

        this.hotelRoomsBarData = {
          labels: this.hotelRoomsLabel,
          datasets: [
            {
              label: 'Booked Rooms',
              data: this.bookedRooms,
              backgroundColor: '#42A5F5',
              barThickness: 50
            }
          ]
        };

        this.barOptions = {
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: '#e0e0e0'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              enabled: true
            }
          },
          responsive: true,
          maintainAspectRatio: true
        };
      },
      error: (err) => {
        console.log('Error fetching room data:', err.message);
      }
    });
  }

  // Event handler for location change
  onLocationChange(event: any) {
    this.selectedLocation = event.target.value;
    this.loadRoomData(this.selectedLocation);
  }
}
