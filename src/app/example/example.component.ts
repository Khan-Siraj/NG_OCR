import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { OcrService } from '../services/ocr.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({  
  selector: 'app-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FileUploadModule, 
    ToastModule, 
    CommonModule  
  ],
  providers : [MessageService,OcrService],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  fileForm!: FormGroup;
  parsedText: string = '';
  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.fileForm = this.fb.group({
  //     file: [null, Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.fileForm.valid) {
  //     const file = this.fileForm.get('file')?.value;
  //     // Handle file upload logic
  //   }
  // }
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService,private _ocrService:OcrService) {}

  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  submitData(){
    console.log("this is the data",this.uploadedFiles)
    this._ocrService.processOCR(this.uploadedFiles[0]).subscribe((res:any)=>{
      console.log("response from ocr",res)
      this.parsedText = res;
    })
  }
}
