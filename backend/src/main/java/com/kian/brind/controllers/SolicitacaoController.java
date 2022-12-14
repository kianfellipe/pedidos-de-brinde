package com.kian.brind.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kian.brind.entities.Solicitacao;
import com.kian.brind.entities.dto.SolicitacaoDTO;
import com.kian.brind.services.SolicitacaoService;

@RestController
public class SolicitacaoController {

	@Autowired
	private SolicitacaoService service;

	@GetMapping(value = "/pedidos")
	public ResponseEntity<List<SolicitacaoDTO>> findAll(){
		List<SolicitacaoDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/pedidos/filter")
	public Page<Solicitacao> findByDate(
			@RequestParam(value="minDate", defaultValue = "") String minDate,
			@RequestParam(value="maxDate", defaultValue = "") String maxDate,
			Pageable pageable) {
		return service.findByDate(minDate, maxDate, pageable);
	}

	@GetMapping(value = "/pedido/{id}")
	public ResponseEntity<SolicitacaoDTO> findById(@PathVariable Long id) {
		SolicitacaoDTO obj = service.findById(id);
		return ResponseEntity.ok().body(obj);

	}
	
	@PostMapping(value = "/pedido")
	public ResponseEntity<SolicitacaoDTO> insert(@Valid @RequestBody SolicitacaoDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

}
