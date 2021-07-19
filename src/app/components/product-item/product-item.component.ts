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
  @Input() product!: Product;
  @Input() updateProduct?: Product;
  // @Output() toUpdateProduct?: Product;
  subscription?: Subscription;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter;
  @Output() onUpdateProduct: EventEmitter<Product> = new EventEmitter;
  // showUpdateForm?: boolean = false;
  // private subject = new Subject<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onDelete(product: Product) {
    this.onDeleteProduct.emit(product);
  }

  onUpdate(updateProduct: Product) {
    // this.onUpdateProduct.emit(updateProduct);
    this.productService.updateProduct(updateProduct)
  }

  // toggleUpdateForm(product: Product) {
  //   this.showUpdateForm = !this.showUpdateForm;
  //   this.subject.next(this.showUpdateForm);
  // }


}
