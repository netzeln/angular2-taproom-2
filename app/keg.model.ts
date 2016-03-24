export interface IBeer {
  beerName: string;
  breweryName: string;
  abv: number;
  price: number;
}

export class Keg {
  public low: boolean = false;
  public pintsLeft: number = 124;

  //beer details
  public beerType: IBeer;
  public beerName: string;
  public breweryName: string;
  public abv: number;
  public price: number;
  constructor(public kegDetails: IBeer) {
    this.beerName = kegDetails.beerName;
    this.breweryName = kegDetails.breweryName;
    this.abv = kegDetails.abv;
    this.price = kegDetails.price;
  }
}
