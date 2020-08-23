import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/container/service/product/product.service';
import { CategoryService } from 'src/app/container/service/category/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  categories: any;
  editProductForm: FormGroup;

  //lấy idProduct từ link
  idProduct = +this.activateRouter.snapshot.paramMap.get('id');

  constructor(private productService: ProductService,
              private activateRouter: ActivatedRoute,
              private fb: FormBuilder,
              private categoryService: CategoryService,
              private route: Router) { }


  ngOnInit(): void {
    //lấy ra tất cả Categories
    this.getAllCategories();

    this.editProductForm = this.fb.group({
      id: this.idProduct,
      name : ['', [Validators.required]],
      quantity : ['', [Validators.required]],
      price : ['',[Validators.required]],
      category: this.fb.group({
        id: ['']
      })
    });

    this.productService.getProductById(this.idProduct).subscribe(res => {
        this.editProductForm.patchValue(res)
    })
  }

  //Thực hiện edit product
  editProduct(){
    let data = this.editProductForm.value;
    this.productService.editProductById(data, this.idProduct).subscribe(res =>{
      window.alert("Edit product success!")
      this.route.navigate(['/products']);
    })
  }

  getAllCategories = () => {
    this.categoryService.getAllCategories()
    .then(response => {
      // console.log(response);
      this.categories = response;
    })
    .catch(error => {
      console.log("Error to get all categories!");
    });
  }

  get name(){
    return this.editProductForm.get('name')
  }

}
