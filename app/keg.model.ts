export class Keg {
  public pintsLeft: number = 124;
  public beerName: string;
  public breweryName: string;
  public abv: number;
  public price: number;
  constructor(public kegDetails: any[]) {
    this.beerName = kegDetails[0];
    this.breweryName = kegDetails[1];
    this.abv = kegDetails[2];
    this.price = kegDetails[3];
  }
}
