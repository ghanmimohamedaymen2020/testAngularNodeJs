import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  listFont =['','Arial','Phosphate','Garmonde','Cooper']
  fontFamily;
  bgColer;
  textColer;
  size ;

  constructor() { }

  ngOnInit(): void {
  }
  changeSize(inp){
    console.log(inp.value)
    this.size= inp.value+'px'
  }

}
