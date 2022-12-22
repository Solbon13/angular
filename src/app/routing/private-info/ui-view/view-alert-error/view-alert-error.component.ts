import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-alert-error',
  templateUrl: './view-alert-error.component.html',
  styleUrls: ['./view-alert-error.component.scss']
})
export class ViewAlertErrorComponent implements OnInit {
  @Input() serverError: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
