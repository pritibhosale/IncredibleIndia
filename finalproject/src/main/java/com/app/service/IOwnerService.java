package com.app.service;
import com.app.pojos.City;
import com.app.pojos.PropertyDetails;
public interface IOwnerService {
        String addCity(City city);
		String addProperty(PropertyDetails propData);
		 
}
