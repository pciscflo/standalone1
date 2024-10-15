import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ProductService} from "../service/product.service";


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
export class ProductsComponent implements OnInit {
  total: number = 0;
  private productService = inject(ProductService);

  ngOnInit(): void {
     this.total = this.productService.suma(10,10);
  }
  products = [
     { id: 1, name: 'Product 1' },
     { id: 2, name: 'Product 2' },
     { id: 3, name: 'Product 3' }
  ];
}
