import {Attribute} from './attribute';

export class Ship {
  group: string;
  name:string;
  race: string;
  description: string;
  volume: number;
  capacity: number;
  mass: number;
  icon_path: string;
  attributes: Attribute[]
}
