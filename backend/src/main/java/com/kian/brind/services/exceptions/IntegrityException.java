package com.kian.brind.services.exceptions;

public class IntegrityException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public IntegrityException(String msg) {
		super(msg);
	}

}
