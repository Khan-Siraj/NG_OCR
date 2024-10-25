import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileValidator, MaterialFileInputModule } from 'ngx-material-file-input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-covert',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MaterialFileInputModule
  ],
  templateUrl: './covert.component.html',
  styleUrl: './covert.component.scss'
})
export class CovertComponent {

  /**
 * In this example, it's 100 MB (=100 * 2 ** 20).
 */

  readonly maxSize = 40;
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      file: [null, Validators.required, FileValidator.maxContentSize(this.maxSize)]
    })

  }

  onSubmit() {
    console.log(this.form.value)
  }

}
