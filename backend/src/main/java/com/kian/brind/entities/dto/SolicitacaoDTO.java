package com.kian.brind.entities.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.kian.brind.entities.Solicitacao;

public class SolicitacaoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private LocalDate date = LocalDate.now();
	private String nomeSolicitante;
	private String email;
	private String cargo;
	private String codigoCargo;
	private String clienteNovo;
	private String codigoCliente;
	private String cnpj;
	private String razaoSocial;	
	private String tipoSolicitacao;
	private String produtos;
	private String obs;

	public SolicitacaoDTO() {
	}

	public SolicitacaoDTO(Long id, LocalDate date, String nomeSolicitante, String email, String cargo,
			String codigoCargo, String clienteNovo, String codigoCliente, String cnpj, String razaoSocial,
			String tipoSolicitacao, String produtos, String obs) {
		super();
		this.id = id;
		this.date = date;
		this.nomeSolicitante = nomeSolicitante;
		this.email = email;
		this.cargo = cargo;
		this.codigoCargo = codigoCargo;
		this.clienteNovo = clienteNovo;
		this.codigoCliente = codigoCliente;
		this.cnpj = cnpj;
		this.razaoSocial = razaoSocial;
		this.tipoSolicitacao = tipoSolicitacao;
		this.produtos = produtos;
		this.obs = obs;
	}

	public SolicitacaoDTO(Solicitacao entity) {
		id = entity.getId();
		date = entity.getDate();
		nomeSolicitante = entity.getNomeSolicitante();
		email = entity.getEmail();
		cargo = entity.getCargo();
		codigoCargo = entity.getCodigoCargo();
		clienteNovo = entity.getClienteNovo();
		codigoCliente = entity.getCodigoCliente();
		cnpj = entity.getCnpj();
		razaoSocial = entity.getRazaoSocial();
		tipoSolicitacao = entity.getTipoSolicitacao();
		produtos = entity.getProdutos();
		obs = entity.getObs();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getNomeSolicitante() {
		return nomeSolicitante;
	}

	public void setNomeSolicitante(String nomeSolicitante) {
		this.nomeSolicitante = nomeSolicitante;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getCodigoCargo() {
		return codigoCargo;
	}

	public void setCodigoCargo(String codigoCargo) {
		this.codigoCargo = codigoCargo;
	}

	public String getClienteNovo() {
		return clienteNovo;
	}

	public void setClienteNovo(String clienteNovo) {
		this.clienteNovo = clienteNovo;
	}

	public String getCodigoCliente() {
		return codigoCliente;
	}

	public void setCodigoCliente(String codigoCliente) {
		this.codigoCliente = codigoCliente;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getTipoSolicitacao() {
		return tipoSolicitacao;
	}

	public void setTipoSolicitacao(String tipoSolicitacao) {
		this.tipoSolicitacao = tipoSolicitacao;
	}

	public String getProdutos() {
		return produtos;
	}

	public void setProdutos(String produtos) {
		this.produtos = produtos;
	}

	public String getObs() {
		return obs;
	}

	public void setObs(String obs) {
		this.obs = obs;
	}

}