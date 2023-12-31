import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('message');
  changeDurationHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.update((_state) => input.valueAsNumber);
  }
  changeMessageHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.update((_state) => input.value);
  }
}
