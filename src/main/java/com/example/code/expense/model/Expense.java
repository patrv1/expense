package com.example.code.expense.model;

import java.time.Instant;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="expense")
public class Expense {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private Instant expensedate;
	
	private String description;
	
	private String location;
	
	@ManyToOne
	private Category category;
	
	@JsonIgnore 
	@ManyToOne
	private User user;

}
