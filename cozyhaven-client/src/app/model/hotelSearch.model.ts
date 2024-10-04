export class HotelSearch{
    location:string;
    checkInDate:string;
    checkOutDate:string;
    numberGuests:number;
    numRooms:number;

    constructor(location:string,checkInDate:string,checkOutDate:string,numberGuests:number,numRooms:number){
        this.location=location;
        this.checkInDate=checkInDate;
        this.checkOutDate=checkOutDate;
        this.numberGuests=numberGuests;
        this.numRooms=numRooms;
    }
}