package com.kian.brind.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "tb_solicitacao")
public class Solicitacao implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String jsonPedido;

	@Column(name = "data", nullable = false, unique = true)
	private LocalDate date = LocalDate.now();

	public Solicitacao() {
	}

	public Solicitacao(String jsonPedido) {
		super();
		this.jsonPedido = jsonPedido;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getJsonPedido() {
		return jsonPedido;
	}

	public void setJsonPedido(String jsonPedido) {
		this.jsonPedido = jsonPedido;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

}