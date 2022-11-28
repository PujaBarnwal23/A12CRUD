import { Component, OnInit } from '@angular/core';
import {CRUDService} from "../services/crud.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // @ts-ignore
  productDetails: Product;
  productName : any;
   productDesc : any;
   productPrice : any;


  constructor(private crudService: CRUDService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = '';
    if(this.activatedRoute.snapshot.params['productId']) {
      productId = this.activatedRoute.snapshot.params['productId'];
      if (productId !== '') {
        this.loadProductDetails(productId);
      }
    }
  }

  loadProductDetails(productId: any) {
    this.crudService.loadProductInfo(productId).subscribe(res => {
      this.productDetails = res;
      this.productName = res.p_name;
      this.productDesc = res.p_description;
      this.productPrice = res.p_price;

    });
  }

}
