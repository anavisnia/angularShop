import { Component, OnInit, Input } from '@angular/core';
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

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => this.products = this.products.filter(p => p.id !== product.id));
  }

  // updateProduct(toUpdateProduct: Product) {
  //   this.productService.updateProduct(toUpdateProduct).subscribe(
  //     (data) => { // Success
  //       console.log(data)
  //     },
  //     (error) => {
  //       console.error("Error: " + JSON.stringify(error));
  //     }
  //   );
  // }

}
