package com.kian.brind.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

import com.kian.brind.entities.enums.RoleAuthority;

@Entity
@Table(name = "tb_role")
public class Role implements GrantedAuthority, Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, unique = true)
	private RoleAuthority roleAuthority;
	
	

	public Role() {
	}

	public Role(Long id, RoleAuthority roleAuthority) {
		this.id = id;
		this.roleAuthority = roleAuthority;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public RoleAuthority getRoleAuthority() {
		return roleAuthority;
	}

	public void setRoleAuthority(RoleAuthority roleAuthority) {
		this.roleAuthority = roleAuthority;
	}

	@Override
	public String getAuthority() {
		return this.roleAuthority.toString();
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Role other = (Role) obj;
		return Objects.equals(id, other.id);
	}

}