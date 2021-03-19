package com.app.dto;

import java.util.List;
public interface AreaDTO {
	String getAreaName();
	City getCityData();
	interface City{
		String getCityName();
	}
	List<PropertyDetails> getAreaPropData();
	interface PropertyDetails{
		String getAddress();
		String getRent();
		String getStatus();
	}
	
}
