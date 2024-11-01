import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiErrorResponse, ApiSuccessResponse } from '../interfaces/api-response';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  processOCR(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<ApiSuccessResponse>('api/ocr/process-ocr', formData).pipe(
      map((response:ApiSuccessResponse) => response.data.ParsedResults[0].ParsedText),
      catchError((errorResponse: ApiErrorResponse) => {
        this._snackBar.open(errorResponse.error||'Something went wrong.', 'Close', 
        { 
          duration: 5000,
          verticalPosition: 'top', 
          horizontalPosition: 'center'
        });
        return throwError(errorResponse);
      })
    );
  }
}
