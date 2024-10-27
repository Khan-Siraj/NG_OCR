import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { OcrService } from '../services/ocr.service';
import { slideInLeft, slideInRight, slideUp } from '../animation';
@Component({
  selector: 'app-covert',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FileUploadModule,
    ToastModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [MessageService],
  templateUrl: './covert.component.html',
  styleUrl: './covert.component.scss',
  animations : [slideInLeft,slideInRight,slideUp]
})
export class CovertComponent {
  uploadedFiles: any[] = [];
  parsedText = ''
  constructor(private messageService: MessageService, private _ocrService: OcrService) { }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  submitData() {
    this.parsedText = 'skdjsjkb'
    console.log("this is the data", this.uploadedFiles)
    this._ocrService.processOCR(this.uploadedFiles[0]).subscribe((res: any) => {
      console.log("response from ocr", res)
      this.parsedText = res;
    })
  }

  clear() {
    this.parsedText = ''
  }
}
