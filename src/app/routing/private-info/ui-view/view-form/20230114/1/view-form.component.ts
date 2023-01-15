import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { GeneralService } from 'src/app/services/organization/general.service';
import { TASK } from '../../childs/task-page/const';

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
  fileList: NzUploadFile[] = []


  constructor(
    private generalService: GeneralService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    // this.onChangesProp()
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    // this.valueForm.forEach(question => {
    //   if (question.disabled) {
    //     requestData[question.key] = question.disabled
    //   }
    // })
    if (requestData.role) {
      requestData.role = requestData.role.filter((v: any) => v.checked).map((v: any) => v.value)
    }
    if (this.currentModule == TASK) {
      requestData.executor = requestData.executor.map((v: any) => ({
        id: v.id,
        person_id: v.person.id,
        status_id: v.statusTask.id,
        task_id: v.task_id ? v.task_id : ''
      }))

      let formData = new FormData()
      // for (var key in requestData) {
      //   if (Array.isArray(requestData[key])) {
      //     // if (key != 'files')
      //     // formData.append(key, JSON.stringify(requestData[key]));
      //     formData.append(key, requestData[key]);
      //   } else {
      //     formData.append(key, requestData[key]);
      //   }
        formData.append('properties', new Blob([JSON.stringify(requestData)], {
          type: "application/json"
        }));
      // }
      // formData = {...requestData}
      this.fileList.forEach((file: any) => {
        formData.append('files', file);
      });
      requestData = formData
    }
    if (this.id === 'new')
      this.generalService.create(requestData, this.currentModule).subscribe({
        next: data => {
          this.uploading = false
          this.nzMessageService.info(data.message ? data.message : 'Запись добавлена');
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
          this.nzMessageService.info(data.message ? data.message : 'Запись изменена');
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

  addRec(value: any) {
    console.log(this.validateForm.value[value.id])
    console.log(value)
    this.validateForm.value[value.id] = [
      ...this.validateForm.value[value.id],
      {
        person: value.username,
        statusTask: { id: 1, creationDate: null, name: 'queue' },
        task_id: parseInt(this.id)
      }]
    console.log(this.validateForm.value)
  }

  delRec(value: any) {
    this.validateForm.value[value.field] = this.validateForm.value[value.field].filter((v: any) => v.id != value.id)
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

}
