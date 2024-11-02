import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  
  isLoading:any
  constructor(private loaderService: LoaderService) {}
  
  ngOnInit(){
    this.isLoading = this.loaderService.isLoading$;

  }
}
