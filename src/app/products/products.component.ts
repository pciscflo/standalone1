import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];
}
