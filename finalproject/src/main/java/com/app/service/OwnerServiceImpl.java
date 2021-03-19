package com.app.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CityRepository;
import com.app.dao.PropertyRepository;
import com.app.pojos.City;
import com.app.pojos.PropertyDetails;
@Service
@Transactional
public class OwnerServiceImpl implements IOwnerService {
	@Autowired
	private CityRepository cityRepo;
	@Autowired
	private PropertyRepository propRepo;	
	@Override
	public String addCity(City city) {
		 try {
			    String cityName=city.getCityName();
			    String cityna=cityRepo.existsCityByName(cityName);
			      if(cityName != cityna)
			      {
			    	  cityRepo.save(city);
			    	    return "City value inserted";
			      }
		} catch (DataIntegrityViolationException e) {
			System.out.println("err in processing " + e);
			return "CityName is duplicate";
			
		}
	         return "city inserted or not ";
	}
	@Override
	public String addProperty(PropertyDetails propData) {
		     propRepo.save(propData);
		    return "property saved successfully";
	}
	

}
