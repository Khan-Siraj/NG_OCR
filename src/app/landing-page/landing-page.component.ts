import { Component } from '@angular/core';
import { slideInLeft, slideInRight, slideUp } from '../animation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  animations : [slideInLeft,slideInRight,slideUp]
})
export class LandingPageComponent {

}
