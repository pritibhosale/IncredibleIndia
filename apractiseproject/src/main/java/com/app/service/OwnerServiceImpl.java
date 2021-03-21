package com.app.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
//import com.app.dao.AreaInfoRepository;
//import com.app.dao.CityRepository;
import com.app.dao.PropertyRepository;
//import com.app.dto.SelectCityTaluqaDTO;
//import com.app.pojos.City;
import com.app.pojos.PropertyDetails;
import java.time.LocalDate;
@Service
@Transactional
public class OwnerServiceImpl implements IOwnerService {
	//@Autowired
	//private CityRepository cityRepo;
	@Autowired
	private PropertyRepository propRepo;	
	//@Autowired
	//private AreaInfoRepository areaRepo;
	@Override
	public String addProperty(PropertyDetails propData) {
		   // PropertyDetails propData1=((propData.getAreaName(),propData.getCityData(),propData.getAreaPropData()));
		   propData.setStatus("Avail");
		   System.out.println(LocalDate.now());
		    propData.setDate(LocalDate.now());
		  // propData.setDate();
		     propRepo.save(propData);
		    return "property saved successfully";
	}
	/*@Override
	public List<SelectCityTaluqaDTO> selectCityAndTaluqa() {
		 return areaRepo.selectCityTaluqa();
	}*/
	

}
