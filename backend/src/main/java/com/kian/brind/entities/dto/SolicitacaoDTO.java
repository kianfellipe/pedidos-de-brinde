package com.kian.brind.entities.dto;

import java.io.Serializable;

import javax.persistence.Lob;

import com.kian.brind.entities.Solicitacao;

public class SolicitacaoDTO implements Serializable {
	private static final long serialVersionUID = 1L;


	private Long id;
	@Lob
	private String jsonPedido;

	public SolicitacaoDTO() {
	}
	
	public SolicitacaoDTO(Solicitacao entity) {
		id = entity.getId();
		jsonPedido = entity.getJsonPedido();
	}

	public SolicitacaoDTO(String jsonPedido) {
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

}