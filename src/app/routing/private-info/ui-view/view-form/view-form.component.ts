import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GeneralService } from 'src/app/services/organization/general.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit, OnChanges {
  validateForm: any
  uploading: boolean = false
  @Input() id!: string
  @Input() valueForm!: any[]
  @Input() currentModule!: string
  @Output() isError = new EventEmitter<string>();
  @Input() path: string = ''

  constructor(
    private generalService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    // this.onChangesProp()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['valueForm'])
    this.onChangesProp()
  }

  onChangesProp() {
    const group: any = {};
    this.valueForm.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value, Validators.required)
        : new FormControl(question.value);
    });
    this.validateForm = new FormGroup(group);
  }

  submitFormNew(): void {
    this.uploading = true
    let requestData = this.validateForm.value
    if (requestData.role) {
      requestData.role = requestData.role.filter((v:any) => v.checked).map((v:any) => v.value)
    }
    console.log(this.validateForm.value)
    if (this.id === 'new')
      this.generalService.create(requestData, this.currentModule).subscribe({
        next: data => {
          this.uploading = false
          this.nzMessageService.info('Запись добавлена');
        },
        error: err => {
          this.uploading = false
          if (err.error) {
            this.isError.emit(err.error.message)
            this.nzMessageService.info(err.error.message);
          } else {
            this.isError.emit("Ошибка со статусом: " + err.status)
            this.nzMessageService.info("Ошибка со статусом: " + err.status);
          }
        }
      });
    else
      this.generalService.update(requestData, this.id, this.currentModule).subscribe({
        next: data => {
          this.uploading = false
          this.nzMessageService.info('Запись изменена');
        },
        error: err => {
          this.uploading = false
          if (err.error) {
            this.isError.emit(err.error.message)
            this.nzMessageService.info(err.error.message);
          } else {
            this.isError.emit("Ошибка со статусом: " + err.status)
            this.nzMessageService.info("Ошибка со статусом: " + err.status);
          }
        }
      });
  }

}
