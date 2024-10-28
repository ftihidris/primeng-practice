import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from "./header/header.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { KnobComponent } from "./knob/knob.component";
import { DoughnutComponent } from "./doughnut/doughnut.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    DropdownComponent,
    RouterOutlet,
    MenubarModule,
    HeaderComponent,
    DropdownComponent,
    KnobComponent,
    DoughnutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng-practice';
}
