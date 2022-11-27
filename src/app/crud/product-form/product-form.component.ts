import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
// @ts-ignore
  productForm: FormGroup;

  constructor(private crudService : CRUDService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
      this.productForm = this.formBuilder.group({
        name: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)])],
        description: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)])],
        price: ['', Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(8)])]
      });
    }

    createProduct(values: any , isUpdate:any) {
      let formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('price', values.price);

      if(isUpdate) {
        //for update product
      } else {
        this.crudService.createProduct(formData).subscribe(res =>{
          if (res.result === 'success') {
            this.router.navigate(['/crud/product-list']);
          }
        })
      }

    }



}
