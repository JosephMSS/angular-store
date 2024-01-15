import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  /**
   * Utilizamos ! para señalar que el valor aun no va a ser inicializado
   */
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('waveAudio') container!: ElementRef;
  /**
   * El elemento del wave-audio se va a renderizar
   * una vez el elemento wave se encuentre
   * renderizado en el DOM
   */
  ngAfterViewInit() {

    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    });
  }
}
