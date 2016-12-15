/**
 * Created by isidis on 12/8/2016.
 */
import { Component , OnInit} from '@angular/core';
import { getRandomShip } from '../app.data';
import { Ship } from './models/ship';
@Component({
  selector: 'ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.less']
})
export class ShipDetailsComponent implements OnInit{
  public ship: Ship;
  constructor(){

  }

  ngOnInit() {
    this.ship = getRandomShip();
    console.log(this.ship);
  }

}
