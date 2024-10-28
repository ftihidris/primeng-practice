import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

}
