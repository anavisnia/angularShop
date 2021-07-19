import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { Subscription } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products: Product[] = [];
  @Input() product!: Product;
  @Input() updateProduct?: Product;
  subscription?: Subscription;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onDelete(product: Product) {
    this.onDeleteProduct.emit(product);
  }

  onUpdate(updateProduct: Product) {
    this.productService.updateProduct(updateProduct).subscribe(() => this.products.push(updateProduct));
  }


}
