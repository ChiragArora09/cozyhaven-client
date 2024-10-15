import { Component, OnInit } from '@angular/core';
import { FlightProviderSidebarComponent } from '../../../components/flight-provider-sidebar/flight-provider-sidebar.component';
import { ChartModule } from 'primeng/chart';
import { FlightDashboardService } from '../../../service/flight-dashboard.service';
import { FlightProviderService } from '../../../service/flight-provider.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-flight-provider',
  standalone: true,
  imports: [FlightProviderSidebarComponent, ChartModule, NgFor],
  templateUrl: './flight-provider.component.html',
  styleUrl: './flight-provider.component.css'
})
export class FlightProviderComponent implements OnInit {
  flightLabels: any[] = [] // labels for bigger pie chart
  flightPieData: any[] = [] // flight bookings data for bigger pie chart
  flightPieBookingData: any // flight bookings entire dataset for bigger pie chart
  pieOptions: any // options for bigger pie chart

  totalBookings: any
  totalNumberOfFlights: any[] = []
  totalUniqueCustomers: any

  flightDateLabels: any[] = [] // labels for small pie chart
  flightDatePieData: any[] = [] // flight bookings data for small pie chart
  flightDatePieBookingData: any // flight bookings entire dataset for small pie chart
  pieDateOptions: any // options for small pie chart

  flightRevenueLabels: any[] = []
  flightRevenueData:any[] = []
  barOptions:any
  flightRevenueBarData:any

  lineLabels: any[] = []
  lineData:any[] = []
  lineOptions:any
  completeLineData:any

  polarAreaLabels: any[] = []
  polarAreaData:any[] = []
  polarAreaOptions:any
  completepolarAreaData:any

  today: any

  flightsName: any[] = []

  constructor(private flightDashboardService: FlightDashboardService, private flightProviderService: FlightProviderService) {}
  
  ngOnInit() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    this.today = today

    // GETTING MOST POPULAR ROUTES
    this.flightDashboardService.getPopularRoutes()
    .subscribe({
      next: (data) => {
        console.log(data)
        for(let d of data){
          this.polarAreaLabels.push(d.flightInfo)
          this.polarAreaData.push(d.bookingCount)
        }
        this.completepolarAreaData = {
          labels: this.polarAreaLabels,
          datasets: [
            {
              data: this.polarAreaData,
              backgroundColor: ['#00BCD4', '#9C27B0', '#FFEB3B', '#607D8B', '#F4511E']
            }
          ]
        },
        this.polarAreaOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (tooltipItem) => {
                  const label = tooltipItem.label || '';
                  const value = tooltipItem.raw || 0;
                  return `${label}: ${value} bookings`;
                }
              }
            }
          },
          scales: {
            r: {
              ticks: {
                display: false
              },
              grid: {
                color: '#494949', // Your desired grid line color
              },
            }
          },
        }
      },
      error: (err) => {
        console.log(err)
      }
    })

    // GETTING FLIGHTS AND BOOKINGS FOR TODAY
    this.flightDashboardService.getFlightBookingsByDate(this.today)
    .subscribe({
      next: (data) => {
        for(let d of data){
          this.flightDateLabels.push(d.flightInfo)
          this.flightDatePieData.push(d.bookingCount)
          this.flightDatePieBookingData = {
            labels: this.flightDateLabels,
            datasets: [
              {
                data: this.flightDatePieData,
                backgroundColor: ['#D32F2F', '#388E3C', '#FFA726', '#7B1FA2', '#03A9F4', '#8BC34A', '#E91E63', '#FDD835', '#1E88E5', '#43A047', '#FFC107', '#673AB7', '#CDDC39', '#FF7043', '#5D4037', '#00BCD4', '#9C27B0', '#FFEB3B', '#607D8B', '#F4511E']
              }
            ]
          }
          this.pieOptions = {
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Flights - Number of bookings',
                },
              },
          }
          
        }
      },
      error: (err) => {
        console.log(err)
      }
    })

    // GETTING FLIGHTS AND BOOKINGS
    this.flightDashboardService.getPopularFlights()
    .subscribe({
      next: (data) => {
        for(let d of data){
          this.flightLabels.push(d.flightInfo)
          this.flightPieData.push(d.bookingCount)
        }
          this.flightPieBookingData = {
            labels: this.flightLabels,
            datasets: [
              {
                data: this.flightPieData,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0','#9966FF', '#FF9F40', '#C9CBCF', '#FF5733','#33FF57', '#3357FF']
              }
            ]
          }
          this.pieOptions = {
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Flights - Number of bookings',
                },
              },
          }
      },
      error: (err) => {
        console.log(err)
      }
    })

    // GETTING FLIGHT AND REVENUE INFORMATION
    this.flightDashboardService.getFlightRevenue()
    .subscribe({
      next: (data) => {
        for(let d of data){
          this.flightRevenueLabels.push(d.flightInfo)
          this.flightRevenueData.push(d.revenue)
        }
        this.flightRevenueBarData = {
          labels: this.flightRevenueLabels,
          datasets: [
            {
              label: 'Total Revenue',
              data: this.flightRevenueData,
              backgroundColor: ['#FF5733', '#33FF57', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0','#9966FF', '#FF9F40', '#C9CBCF', '#FF5733','#33FF57', '#3357FF'],
              borderColor: ['#C70039', '#28B463'],
              borderWidth: 1
            }
          ]
        }
        this.barOptions = {
          scales: {
            y: {
              grid: {
                color: '#494949',
                lineWidth: 1,
              },
              beginAtZero: true,
              title: {
                display: true,
                text: 'Total Revenue',
                font: { size: 16 }
              }
            },
            x: {
              grid: {
                color: '#494949',
                lineWidth: 1,
              },
              title: {
                display: true,
                text: 'Flights',
                font: { size: 16 }
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
          barThickness: 'flex',
          elements: {
            bar: {
              barPercentage: 0.5,
              categoryPercentage: 0.5 
            }
          }
        }
      },
      error: (err) => {
        console.log(err)
      }
    })


    // GETTING TOTAL BOOKINGS
    this.flightDashboardService.getNumberOfTotalBookings()
    .subscribe({
      next: (data) => {
        console.log(data)
        this.totalBookings=data
      },
      error: (err) => {
        console.log(err)
      }
    })

    // GETTING TOTAL FLIGHTS
    this.flightProviderService.getMyFlights()
    .subscribe({
      next: (data) => {
        this.totalNumberOfFlights = data
      },
      error: (err) => {console.log(err)}
    })

    //GETTING MY UNIQUE CUSTOMER NUMBERS
    this.flightDashboardService.getMyTotalUniqueCustomers()
    .subscribe({
      next: (data) => {
        this.totalUniqueCustomers=data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onDateChange(event: any) {
    this.flightDateLabels = []
    this.flightDatePieData = []
    this.flightDatePieBookingData = {}
    this.pieOptions = {}
    this.flightDashboardService.getFlightBookingsByDate(event.target.value)
    .subscribe({
      next: (data) => {
        for(let d of data){
          this.flightDateLabels.push(d.flightInfo)
          this.flightDatePieData.push(d.bookingCount)
        }
          this.flightDatePieBookingData = {
            labels: this.flightDateLabels,
            datasets: [
              {
                data: this.flightDatePieData,
                backgroundColor: ['#D32F2F', '#388E3C', '#FFA726', '#7B1FA2', '#03A9F4', '#8BC34A', '#E91E63', '#FDD835', '#1E88E5', '#43A047', '#FFC107', '#673AB7', '#CDDC39', '#FF7043', '#5D4037', '#00BCD4', '#9C27B0', '#FFEB3B', '#607D8B', '#F4511E']
              }
            ]
          }
          this.pieOptions = {
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Flights - Number of bookings',
                },
              },
          }
      
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onFlightChange(e:any){
    this.lineData = []
    this.lineLabels = []
    this.lineOptions = []
    this.completeLineData = []
    this.flightDashboardService.getFlightRevenueByDates(e.target.value)
    .subscribe({
      next: (data) => {
        for(let d of data){
          this.lineLabels.push(d.flightInfo)
          this.lineData.push(d.revenue)
        }
        this.completeLineData = {
          labels: this.lineLabels,
          datasets: [{
            label: 'Total Revenue',
            data: this.lineData,
            fill: false,
            borderColor: '#FF5733',
            tension: 0.1
          }]
        }
        this.lineOptions = {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Total Amount',
                font: { size: 16 }
              },
              grid: {
                color: '#494949',
              }
            },
            x: {
              title: {
                display: true,
                text: 'Date',
                font: { size: 16 }
              },
              grid: {
                color: '#494949',
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (tooltipItem) => {
                  return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                }
              }
            }
          }
        }

      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
