import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  @Input() toUpdateProduct!: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe((product) => this.products.push(product));
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => this.products = this.products.filter(p => p.id !== product.id));
  }

}
