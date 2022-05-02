package com.example.code.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.code.expense.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
		Category findByName(String name);
}
