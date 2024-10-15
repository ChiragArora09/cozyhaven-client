import { Component } from '@angular/core';
import { ViewhotelService } from '../../../service/viewhotel.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HotelProviderComponent } from "../hotel-provider/hotel-provider.component";
import { HotelService } from '../../../service/hotel.service';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, HotelProviderComponent,ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  hotels:any[]=[];
  rooms:any[]=[];
  hotelRoomsLabels: any[] = []
totalRoomsData:any[] = []
bookedRoomsData:any[] = []
barOptions:any
hotelRoomsBarData:any
  

  constructor(private viewhotel:ViewhotelService,private route:ActivatedRoute,private hotelService:HotelService){
    this.viewhotel.getHotelList().subscribe({
      next:(data)=>{
        this.hotels=data
       // console.log(this.hotels)
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  onHotelChange(e:any){
    this.hotelRoomsLabels= []
    this.totalRoomsData=[]
    this.bookedRoomsData= []
    this.barOptions={}
    this.hotelRoomsBarData={}
        this.hotelService.getRoomList(e.target.value).subscribe({
          next:(data)=>{
            for(let d of data){
              this.hotelRoomsLabels.push(d.roomType)
              this.totalRoomsData.push(d.totalRooms)
              this.bookedRoomsData.push(d.bookedRooms)
             
            }
            this.hotelRoomsBarData={

              labels:this.hotelRoomsLabels,
              datasets: [
                {
                  label: 'TotalRooms',
                  data: this.totalRoomsData,
                  backgroundColor: '#ff0000', 
                  barThickness:50
                },
                {
                  label: 'Booked Rooms',
                  data: this.bookedRoomsData,
                  backgroundColor: '#42A5F5',
                  barThickness:50 
                },
              ]
            },
            this.barOptions={
              scales: {
                x: {
                  beginAtZero: true,
                  grid: {
                    display: false, // Optional: Hides the vertical grid lines
                  }
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    color: '#e0e0e0', // Optional: Changes color of grid lines
                  }
                }
              },
              plugins: {
                legend: {
                  display: true, // Displays the legend
                  position: 'top',
                },
                tooltip: {
                  enabled: true,
                }
              },
              responsive: true,
              maintainAspectRatio:true
            }
          },
          error:(err)=>{
            console.log(err.msg)
          }
        })
    
  }
}
