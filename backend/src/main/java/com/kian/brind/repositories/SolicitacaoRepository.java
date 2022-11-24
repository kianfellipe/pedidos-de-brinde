package com.kian.brind.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kian.brind.entities.Solicitacao;

@Repository
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {

	@Query(value = "select * from tb_solicitacao where data between :min and :max", nativeQuery = true)
	Page<Solicitacao> findByDate(LocalDate min, LocalDate max, Pageable pageable);
	
}
