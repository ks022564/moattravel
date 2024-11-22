package com.example.moattravel.form;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReservationRegisterForm {
	private Integer houseId;
	
	private Integer userId;
	
	private String CheckinDate;
	
	private String checkoutDate;
	
	private Integer numberOfPeople;
	
	private Integer amount;
}
