import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor(
    private http: HttpClient
  ) { }

  processOCR(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<ApiResponse>('api/ocr/process-ocr', formData).pipe(
      map((response:ApiResponse) => response.data.ParsedResults[0].ParsedText)
    );
  }
}
