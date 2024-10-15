import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  suma(a: number, b: number): number {
    return a + b;
  }
}
