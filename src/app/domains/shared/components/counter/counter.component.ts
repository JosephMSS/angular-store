import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

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
  }
  ngOnInit() {
    // se ejecuta una sola vez después de ngOnChanges
    // es donde podemos ejecutar todo el código asíncrono que necesitemos
    console.log('OnInit method');
    console.log('-'.repeat(10));
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
     *  o detener eventos asíncronos
     */
    console.log('ngOnDestroy method');
    console.log('-'.repeat(10));
  }
}
