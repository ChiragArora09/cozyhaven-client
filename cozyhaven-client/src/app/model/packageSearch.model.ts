export class PackageSearch{
    fromLocation:string;
    toLocation:string;
    type:string;
    numDays:number;
    numGuests:number;

    constructor(fromLocation:string,toLocation:string,type:string,numDays:number,numGuests:number){
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.type=type;
        this.numGuests=numGuests;
        this.numDays=numDays;
    }
}