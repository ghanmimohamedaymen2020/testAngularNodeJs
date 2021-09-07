import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input()
  onePersonne: Personne;
  @Output() msgToliste= new EventEmitter<Personne>();

  constructor() { }

  ngOnInit(): void {
  }
  sendPerssonToList(){
    this.msgToliste.emit(this.onePersonne);
  }

}
