import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/container/service/product/product.service';
import { CategoryService } from 'src/app/container/service/category/category.service';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  idCategory;

  constructor(private productService: ProductService,
             private fb: FormBuilder, private categoryService: CategoryService) { }
  categories: any;
  createProductForm: FormGroup;
  ngOnInit(): void {
    this.getAllCategories();


    this.createProductForm = this.fb.group({
      name : ['', [Validators.required]],
      quantity : ['', [Validators.required]],
      price : ['',[Validators.required]],
      category: this.fb.group({
        id: ['']
      })
    })

    console.log(this.idCategory);

  }

  getAllCategories = () => {
    this.categoryService.getAllCategories()
    .then(response => {
      console.log(response);
      this.categories = response;
    })
    .catch(error => {

    });
  }

  createProduct() {
    let data = this.createProductForm.value;
    console.log(data)
      this.productService.createProduct(data).subscribe(res =>{
        console.log(res)
      })
  }

  get name(){
    return this.createProductForm.get('name')
  }

}
