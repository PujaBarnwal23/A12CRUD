import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';
import {Product} from "../models/product";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private crudService : CRUDService,
              private activatedRoute : ActivatedRoute) { }

   // @ts-ignore
       productDetails : Product;

  ngOnInit(): void {
    let productId = '';
      if (this.activatedRoute.snapshot.params['productId']) {
         productId = this.activatedRoute.snapshot.params['productId'];
         if(productId !== '') {
            this.loadProductDetails(productId);
         }
      }

    }
    loadProductDetails(productId: any) {
      this.crudService.loadProductInfo(productId).subscribe(res => {
        this.productDetails = res;
      });
    }




}
