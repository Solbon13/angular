import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss']
})
export class PrivateInfoComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  collapsed () {
    this.isCollapsed = !this.isCollapsed
  }

}
