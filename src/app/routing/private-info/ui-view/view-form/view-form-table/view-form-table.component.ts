import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-form-table',
  templateUrl: './view-form-table.component.html',
  styleUrls: ['./view-form-table.component.scss']
})
export class ViewFormTableComponent implements OnInit {

  @Input() listOfData: any[] = [];
  @Input() listSelect: any[] = [];
  @Input() field: string = '';
  @Output() addRec = new EventEmitter<any>();
  @Output() delRec = new EventEmitter<any>();

  validateForm!: FormGroup;

  submitForm(): void {
    this.listOfData = [
      ...this.listOfData,
      {
      person: this.validateForm.value.username,
      statusTask: { id: 1, creationDate: null, name: 'queue' },
      task_id: 2
    }]
    this.addRec.emit(this.validateForm.value)
  }

  confirm(id: number) {
    this.listOfData = this.listOfData.filter(v=>v.id!=id)
    this.delRec.emit({field: this.validateForm.value.id, id: id})
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('table form', this.listOfData)
    this.validateForm = this.fb.group({
      id: [this.field],
      username: ['', [Validators.required]]
    });
  }

}
