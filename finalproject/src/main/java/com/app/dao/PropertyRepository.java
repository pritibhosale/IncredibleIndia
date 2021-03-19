package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.app.dto.FacilityDetailsDTO;
import com.app.dto.PropertyDetailsDTO;
import com.app.pojos.PropertyDetails;
//"select a from BankAccount a join fetch a.acctOwner where a.acctOwner.customerId =:id")
public interface PropertyRepository extends JpaRepository<PropertyDetails, Integer>{
	@Query("select p from PropertyDetails p  join fetch p.areaData a")
	     List<PropertyDetailsDTO> getAllPropertList();
	
	@Query("select p from PropertyDetails p  join fetch p.areaData a join fetch p.facilityList join fetch a.cityData where p.id=:propid")
	    FacilityDetailsDTO getFacilityDetails(@Param("propid") int id );

}
