import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../components/product/model/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products: Product[] = [
    {
      img: 'https://picsum.photos/640/640?r=1',
      title: 'Product 1',
      price: 100,
    },
    {
      img: 'https://picsum.photos/640/640?r=2',
      title: 'Product 2',
      price: 200,
    },
    {
      img: 'https://picsum.photos/640/640?r=3',
      title: 'Product 3',
      price: 300,
    },
  ];
}
