package com.kian.brind.services;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kian.brind.entities.Solicitacao;
import com.kian.brind.entities.dto.SolicitacaoDTO;
import com.kian.brind.repositories.SolicitacaoRepository;

@Service
public class SolicitacaoService {

	@Autowired
	private SolicitacaoRepository repository;
	


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
