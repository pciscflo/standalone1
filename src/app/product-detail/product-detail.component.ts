import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent  implements OnInit {
  productId: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
  }
}
