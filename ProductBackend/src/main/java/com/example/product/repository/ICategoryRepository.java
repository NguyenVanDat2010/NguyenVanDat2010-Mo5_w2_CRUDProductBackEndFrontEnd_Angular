package com.example.product.repository;

import com.example.product.model.Category;
import org.springframework.data.repository.CrudRepository;

public interface ICategoryRepository extends CrudRepository<Category,Long> {
    Category findCategoryByName(String name);
}
