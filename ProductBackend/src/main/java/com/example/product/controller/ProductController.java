package com.example.product.controller;

import com.example.product.model.Category;
import com.example.product.model.Product;
import com.example.product.service.category.ICategoryService;
import com.example.product.service.pro.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @Autowired
    private ICategoryService categoryService;

    @GetMapping
    public ResponseEntity<Iterable<Product>> getAllProducts(){
        Iterable<Product> products = productService.findAll();
        if (products == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Iterable<Product>> insertProduct(@RequestBody Product product){
        if (product == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
