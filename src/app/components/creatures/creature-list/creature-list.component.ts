import { Component, OnInit } from '@angular/core';
import { Creature} from '../../../models/creature';
@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent implements OnInit {
  columns: string[];
  creatures: Creature[];
  constructor() { }

  ngOnInit() {
    this.columns=["Nombre","Movimiento","Moral"];
    this.creatures=[];
    let c = new Creature();
    c.nombre="asadsd";
    c.movimiento=9;
    c.moral=8;
    this.creatures.push(c);
  }

}
