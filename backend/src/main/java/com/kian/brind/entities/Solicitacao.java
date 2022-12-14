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

	@Column(name = "DATA")
	private LocalDate date = LocalDate.now();

	@Column(name = "SOLICITANTE")
	private String nomeSolicitante;

	@Column(name = "EMAIL")
	private String email;

	@Column(name = "CARGO")
	private String cargo;

	@Column(name = "COD_SOLIC")
	private String codigoCargo;

	@Column(name = "CLI_NOVO")
	private String clienteNovo;

	@Column(name = "COD_CLI")
	private String codigoCliente;

	@Column(name = "CNPJ")
	private String cnpj;

	@Column(name = "RAZAO_SOCIAL")
	private String razaoSocial;

	@Column(name = "TIPO_SOLIC")
	private String tipoSolicitacao;

	@Lob
	@Type(type = "org.hibernate.type.TextType")
	@Column(name = "PRODUTOS")
	private String produtos;

	@Column(name = "OBS")
	private String obs;

	public Solicitacao() {
	}

	public Solicitacao(Long id, LocalDate date, String nomeSolicitante, String email, String cargo, String codigoCargo,
			String clienteNovo, String codigoCliente, String cnpj, String razaoSocial, String tipoSolicitacao,
			String produtos, String obs) {
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