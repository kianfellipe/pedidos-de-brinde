package com.kian.brind.entities.dto;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Lob;

import org.hibernate.annotations.Type;

import com.kian.brind.entities.Solicitacao;

public class SolicitacaoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	@Lob
	@Type(type = "org.hibernate.type.TextType")
	private String jsonPedido;
	
	
	private LocalDate date = LocalDate.now();

	public SolicitacaoDTO() {
	}

	public SolicitacaoDTO(Solicitacao entity) {
		id = entity.getId();
		jsonPedido = entity.getJsonPedido();
		date = entity.getDate();
	}

	public SolicitacaoDTO(String jsonPedido, LocalDate date) {
		super();
		this.jsonPedido = jsonPedido;
		this.date = date;
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