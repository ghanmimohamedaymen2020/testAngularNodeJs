import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
 @Input()  tablPersonne : Personne[]= [];
 @Output() msgToCv = new EventEmitter<Personne>();


  constructor() { }

  ngOnInit(): void {

  }
  RecuPersonneFromItem(pers){
    this.msgToCv.emit(pers);

  }

}
