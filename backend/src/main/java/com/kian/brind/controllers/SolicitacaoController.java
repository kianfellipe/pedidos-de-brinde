package com.kian.brind.controllers;

import java.net.URI;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kian.brind.entities.Solicitacao;
import com.kian.brind.entities.dto.SolicitacaoDTO;
import com.kian.brind.services.SolicitacaoService;

@RestController
@CrossOrigin("https://localhost:3000")

public class SolicitacaoController {

	@Autowired
	private SolicitacaoService service;

	@GetMapping(value = "/pedidos")
	public ResponseEntity<Page<SolicitacaoDTO>> findAll(Pageable pageable){

		Page<SolicitacaoDTO> list = service.findAll(pageable);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/pedido/{id}")
	public ResponseEntity<SolicitacaoDTO> findById(@PathVariable Long id) {
		SolicitacaoDTO obj = service.findById(id);
		return ResponseEntity.ok().body(obj);

	}

	@PostMapping(value = "/pedido", consumes = { "multipart/form-data" }, produces = "application/json")
	public ResponseEntity<SolicitacaoDTO> insert(@RequestPart("solicitacao") String solicitacao) {
		Solicitacao entity = new Solicitacao();
		SolicitacaoDTO dto = new SolicitacaoDTO();
		dto.setJsonPedido(solicitacao);
		BeanUtils.copyProperties(entity, dto);
		service.insert(solicitacao);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(entity.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

}
