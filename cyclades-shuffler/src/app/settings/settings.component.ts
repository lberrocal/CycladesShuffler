import { Component, OnInit } from '@angular/core';
import { Settings } from '../model/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings : Settings = new Settings();

  constructor() { }

  ngOnInit() {
  }

}
