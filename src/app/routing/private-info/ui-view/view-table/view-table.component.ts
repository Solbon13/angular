import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit, OnChanges {
  fieldSearch = ''

  constructor(
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.listOfDisplayData = [...this.listOfData];
  }

  ngOnInit(): void {
  }

  searchValue = '';
  visible = false;
  @Input() listOfData: any[] = [];
  listOfDisplayData = [...this.listOfData];
  @Input() listOfColumns: any[] = [];
  @Input() path: string = ''
  @Output() onDelete =new EventEmitter<string>();

  confirm(id: string): void {
    this.onDelete.emit(id)
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    if (this.fieldSearch)
      this.listOfDisplayData = this.listOfData.filter((item: any) => item[this.fieldSearch].indexOf(this.searchValue) !== -1);
  }

  onSearch(fieldSearch:string) {
    this.fieldSearch = fieldSearch
  }

  onClickRec(id: string) {
    console.log(id)
    this.router.navigate([this.path + id]);
  }
}
