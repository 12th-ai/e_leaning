import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-reusable-home',
  standalone: true,
  imports: [],
  templateUrl: './reusable-home.component.html',
  styleUrl: './reusable-home.component.scss'
})
export class ReusableHomeComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';
}
