package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excs.ResourceNotFoundException;
import com.app.dao.AreaInfoRepository;
import com.app.dao.CityRepository;
import com.app.dao.UserRepository;
import com.app.dto.AreaDTO;
@Service
@Transactional
public class SeekerServiceImpl implements ISeekerService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AreaInfoRepository areaRepo;
	@Autowired
	private CityRepository cityRepo;
	/*@Override
	public String getContactDetails(int ownerId) throws ResourceNotFoundException {
		boolean exists=userRepo.existsById(ownerId);
		   if(!exists)
			throw new ResourceNotFoundException("user is unavailable !!!");
		     String contact=userRepo.getUserDetails(ownerId);
		     return "user contact num:-"+contact;
              
}*/
	@Override
	public List<AreaDTO> searchPropertyByCity(String areaName, String city) throws  ResourceNotFoundException{
		         String area=areaRepo.existsAreaByName(areaName);
		         String name=cityRepo.existsCityByName(city);
		         if(areaName.equals(area) && name.equals(city))   	
		    return areaRepo.findFlatByCity(areaName, city);
		         throw new ResourceNotFoundException("Invalid cityName and areaName!!!!!");
	}
}
