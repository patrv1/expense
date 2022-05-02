package com.example.code.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.code.expense.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long>{
	
}
