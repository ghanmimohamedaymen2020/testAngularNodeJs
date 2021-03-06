import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input () personneSelected: Personne;

  constructor() { }

  ngOnInit(): void {
  }

}
