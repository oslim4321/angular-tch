import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../utils';
import { ProductType } from '../utils/type.model';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  products = productList;
  singleProduct!: ProductType;

  constructor() {
    this.route.params.subscribe((queryParams) => {
      // console.log(queryParams);
      // this.productId = queryParams['id'];

      this.products.filter((product) => {
        if (product.id == queryParams['id']) {
          this.singleProduct = product;
        }
      });
    });
  }
}
