import {
  Component,
  Input,
  SimpleChange,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  intervalRef: undefined | number = undefined;
  constructor() {
    // no async
    //before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChanges) {
    // before and during the render
    console.log('onChanges', changes);
    console.log('-'.repeat(10));
    if (
      changes.hasOwnProperty('duration') &&
      changes['duration'].previousValue !== changes['duration'].currentValue
    ) {
      this.doSomething();
    }
  }
  ngOnInit() {
    // se ejecuta una sola vez después de ngOnChanges
    // es donde podemos ejecutar todo el código asíncrono que necesitemos
    console.log('OnInit method');
    console.log('-'.repeat(10));
    this.intervalRef = window.setInterval(() => {
      console.log('counter', this.counter());

      this.counter.update((state) => state + 1);
    }, 1000);
  }
  ngAfterViewInit() {
    /**
     * se inicia una vez los componentes hijos están listos
     */
    console.log('ngAfterViewInit method');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    /**
     * Se ejecuta cuando se desmonta el componente,
     * se usa generalmente para eliminar suscripciones
     *  o detener eventos asíncronos suscripciones a webosockets o  a metodos de rxjs
     */
    console.log('ngOnDestroy method');
    console.log('-'.repeat(10));
    window.clearInterval(this.intervalRef);
  }
  doSomething() {
    console.log('Something on duration change');
  }
}
