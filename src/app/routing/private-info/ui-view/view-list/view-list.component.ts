import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  @Input() data: any[] = []
  @Input() path: string = ''
  @Input() field: string = ''
  @Output() onDelete =new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  confirm(id: string): void {
    this.onDelete.emit(id)
  }

}
