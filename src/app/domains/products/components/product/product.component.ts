import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) img = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) price = 0;
  @Output() addToCart = new EventEmitter();
  addToCartHandler() {
    console.log(`click desde el child ${this.title}`);
    this.addToCart.emit(`evento emitido desde ${this.title}`);
  }
}
