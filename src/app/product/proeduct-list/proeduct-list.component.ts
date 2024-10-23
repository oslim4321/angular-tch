import { Component } from '@angular/core';
import { productList } from '../utils';
import { NgFor, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proeduct-list',
  standalone: true,
  imports: [NgFor, SlicePipe, RouterLink],
  templateUrl: './proeduct-list.component.html',
  styleUrl: './proeduct-list.component.css',
})
export class ProeductListComponent {
  products = productList;

  ngOnInit() {
    console.log(this.products);
  }
}
