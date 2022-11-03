package com.kian.brind.services;


import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.kian.brind.entities.Solicitacao;
import com.kian.brind.entities.dto.SolicitacaoDTO;
import com.kian.brind.repositories.SolicitacaoRepository;
import com.kian.brind.services.exceptions.ResourceNotFoundException;

@Service
public class SolicitacaoService {

	@Autowired
	private SolicitacaoRepository repository;
	
	@Transactional
	public Page<SolicitacaoDTO>findAll(Pageable pageable){
		Page<Solicitacao> list = repository.findAll(pageable);
		return list.map(obj -> new SolicitacaoDTO(obj));

	}

	@Transactional
	public SolicitacaoDTO findById(Long id) {
		Optional<Solicitacao> obj = repository.findById(id);
		Solicitacao entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id não encontrado"));
		return new SolicitacaoDTO(entity);
	}
	

	@Transactional
	public SolicitacaoDTO insert(String solicitacao) {
		SolicitacaoDTO dto = new SolicitacaoDTO();
		Solicitacao entity = new Solicitacao();
		dto.setJsonPedido(solicitacao);
		BeanUtils.copyProperties(dto, entity);
		repository.save(entity);
		return new SolicitacaoDTO();
	}

}
