import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { OcrService } from '../services/ocr.service';
import { slideInLeft, slideInRight, slideUp } from '../animation';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  templateUrl: './covert.component.html',
  styleUrl: './covert.component.scss',
  animations : [slideInLeft,slideInRight,slideUp]
})
export class CovertComponent {
  uploadedFiles: any[] = [];
  parsedText = ''
  constructor(
    private messageService: MessageService,
    private _ocrService: OcrService,
    private snackBar : MatSnackBar
    ) { }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  submitData() {
    this._ocrService.processOCR(this.uploadedFiles[0]).subscribe((res: any) => {
      console.log("response from ocr", res)
      this.parsedText = res;
    })
  }

  clear() {
    this.parsedText = ''
  }

  clipBoard() {
    navigator.clipboard.writeText(this.parsedText).then(
      () => {
        this.snackBar.open('Text copied to clipboard.', 'Close', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.log('Text copied to clipboard');
      },
      (err) => {
        this.snackBar.open('Failed to copy text.', 'Close', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.error('Failed to copy text: ', err);
      }
    );
  }

  clearAll(){
    this.uploadedFiles = []
    this.parsedText = ''
  }
}
