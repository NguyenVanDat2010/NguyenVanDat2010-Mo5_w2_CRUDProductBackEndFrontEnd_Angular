import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/container/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : any;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();

  }

  getAllProduct = () => {
    this.productService.getAllProduct()
    .then(response => {
      // console.log(response);
      this.products = response;
    })
    .catch(error => {
      console.log("Error to get all categories!");
    });
  }

  deleteProduct(id:number){
    if(confirm('Are you sure?')) {
      this.productService.deleteProductById(id).subscribe(res =>{
        this.getAllProduct();
        // console.log(res);
      })
    }
  }

}
