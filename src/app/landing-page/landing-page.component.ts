import { Component } from '@angular/core';
import { slideInLeft, slideInRight } from '../animation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  animations : [slideInLeft,slideInRight]
})
export class LandingPageComponent {

}
