export class FlightSearch {
    source: string;
    destination: string;
    classType: string;
  
    constructor(source: string, destination: string, classType: string) {
      this.source = source;
      this.destination = destination;
      this.classType = classType;
    }
  }