import { Component, OnInit } from '@angular/core';
import { GODS } from '../model/standard-gods';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {
  gods = GODS;

  constructor() {}

  ngOnInit() {}

}
