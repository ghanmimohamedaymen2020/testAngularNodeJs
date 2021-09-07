import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {


  listePersonne : Personne[]=[
    new Personne("1","ghanmi","Mohamed",31,"informatecien","mohamed.jpg"),
    new Personne("2","ben alli","kamel",30,"informatecien2","homme.jpg"),
    new Personne("3","clara","rodregez",33,"softwer ","femme.jpg")

  ]
  slectedPersonne: Personne;

  constructor() { }

  ngOnInit(): void {
  }
  RecupPersonneFromListe(pers ){
    this.slectedPersonne =pers ;

  }

}
