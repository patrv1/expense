package com.example.code.expense.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@Table(name="category")
public class Category {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	

}
